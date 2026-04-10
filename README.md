# starter-kit-react-sharepoint

Starter kit para construir aplicações React + TypeScript com integração a SharePoint REST API, usando Vite para desenvolvimento local e build.

## Objetivo do projeto

O `starter-kit-react-sharepoint` foi criado para acelerar a entrega de um front-end pronto para evoluir funcionalidades de negócio conectadas ao SharePoint, com:

- **bootstrap de configuração** em tempo de inicialização;
- **camada HTTP reutilizável** para chamadas REST do SharePoint;
- **serviços isolados** por domínio (ex.: listas);
- **componentes de UI básicos** para compor páginas rapidamente;
- **pipeline de qualidade** com lint, typecheck e testes.

## Estrutura de diretórios-chave

```text
src/
  app/
    bootstrap/
      BootstrapLoader.tsx
      appConfig.ts
    services/
      sharepoint/
        listService.ts
    lib/
      http/
        spHttpClient.ts
    components/
      ui/
        Button.tsx
        Card.tsx
        Input.tsx
```

### `src/app/bootstrap`

Responsável por validação de configuração e inicialização da aplicação.

- `appConfig.ts`: centraliza variáveis de ambiente e valida obrigatoriedade de configuração para SharePoint.
- `BootstrapLoader.tsx`: controla estados de inicialização (`loading`, `ready`, `error`) antes de renderizar o app.

### `src/app/services/sharepoint`

Camada de serviços de negócio orientada ao SharePoint.

- `listService.ts`: encapsula acesso a itens de lista (`/_api/web/lists/getbytitle(...)/items`) e retorna dados tipados.

### `src/app/lib/http`

Infraestrutura HTTP comum para integração com backend.

- `spHttpClient.ts`: cliente HTTP para SharePoint com timeout configurável, headers padrão e tratamento de erro padronizado.

### `src/app/components/ui`

Componentes visuais reutilizáveis para páginas e fluxos.

- `Button.tsx`, `Card.tsx`, `Input.tsx`: blocos básicos de UI para acelerar construção de telas.

## Configuração de ambiente (SharePoint)

Crie um arquivo `.env` (ou `.env.local`) na raiz do projeto:

```bash
VITE_SP_SITE_URL=https://<tenant>.sharepoint.com/sites/<site>
VITE_REQUEST_TIMEOUT_MS=15000
```

### Variáveis necessárias

- `VITE_SP_SITE_URL` (**obrigatória**): URL base do site SharePoint usada para montar chamadas `/_api/...`.
- `VITE_REQUEST_TIMEOUT_MS` (opcional): timeout em milissegundos para requisições HTTP. Padrão: `15000`.

> Sem `VITE_SP_SITE_URL`, o bootstrap falha com erro de inicialização para evitar chamadas inválidas.

## Execução local, build e qualidade

### Fluxo principal

- `npm run dev`: inicia ambiente local (Vite).
- `npm run build`: executa TypeScript build + bundle de produção + cópia de manifesto.
- `npm run preview`: publica localmente o artefato gerado em `dist`.
- `npm run clean`: remove artefatos de build.

### Scripts de qualidade

- `npm run lint`: valida padrões de código com ESLint.
- `npm run typecheck`: valida tipagem TypeScript sem gerar arquivos.
- `npm run test`: executa testes em modo CI (`vitest run`).
- `npm run test:watch`: executa testes em modo watch.

## Status atual

### ✅ Pronto

- Estrutura base React + TypeScript + Vite configurada.
- Validação de configuração no bootstrap da aplicação.
- Cliente HTTP para SharePoint com timeout e tratamento de erro.
- Serviço inicial para leitura de itens de listas SharePoint.
- Shell/layout e componentes de UI básicos para evoluir telas.
- Pipeline mínimo de qualidade com lint, typecheck e testes.

### 🔄 Pendente

- Expandir serviços SharePoint (create/update/delete e paginação avançada).
- Implementar autenticação/autorização conforme estratégia do tenant.
- Cobrir fluxos de negócio reais nas páginas (além de conteúdo placeholder).
- Aumentar cobertura de testes de integração e componentes.
- Definir estratégia de observabilidade (logs/telemetria) para produção.
