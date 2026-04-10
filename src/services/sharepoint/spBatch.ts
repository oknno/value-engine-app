import { spClient } from './spClient'

export interface SpBatchOperation {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
  path: string
  headers?: Record<string, string>
  body?: string
}

const CRLF = '\r\n'

const buildOperationBlock = (operation: SpBatchOperation): string => {
  const normalizedPath = operation.path.startsWith('/') ? operation.path : `/${operation.path}`
  const headers = {
    Accept: 'application/json;odata=nometadata',
    ...operation.headers,
  }

  const headerLines = Object.entries(headers)
    .map(([key, value]) => `${key}: ${value}`)
    .join(CRLF)

  const lines = [
    'Content-Type: application/http',
    'Content-Transfer-Encoding: binary',
    '',
    `${operation.method} ${normalizedPath} HTTP/1.1`,
    headerLines,
    '',
    operation.body ?? '',
  ]

  return lines.join(CRLF)
}

export const buildSpBatchPayload = (operations: SpBatchOperation[]): { body: string; boundary: string } => {
  const boundary = `batch_${crypto.randomUUID()}`

  const body = [
    ...operations.flatMap((operation) => [`--${boundary}`, buildOperationBlock(operation)]),
    `--${boundary}--`,
    '',
  ].join(CRLF)

  return { body, boundary }
}

export const spBatch = {
  async execute(operations: SpBatchOperation[]) {
    const { body, boundary } = buildSpBatchPayload(operations)

    return spClient.request<string>('/_api/$batch', {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/mixed; boundary=${boundary}`,
      },
      body,
      responseType: 'text',
    })
  },
}
