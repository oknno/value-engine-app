# Value Engine App (React + TypeScript + Vite)

Aplicação React com TypeScript empacotada com Vite.

## Scripts disponíveis

- `npm run dev`: inicia ambiente de desenvolvimento.
- `npm run build`: valida TypeScript no modo build, gera bundle e copia o manifesto.
- `npm run preview`: serve o build localmente.
- `npm run clean`: remove artefatos de build.
- `npm run lint`: roda ESLint em `src/**/*.ts` e `src/**/*.tsx`.
- `npm run typecheck`: valida tipos TypeScript sem emitir arquivos.
- `npm run test`: executa testes automatizados (Vitest) em modo CI.
- `npm run test:watch`: executa testes em modo watch.

## Qualidade de código

A base usa ESLint com regras para:

- JavaScript recomendado (`@eslint/js`);
- TypeScript com análise baseada em projeto (`typescript-eslint`);
- Boas práticas de hooks React (`eslint-plugin-react-hooks`);
- compatibilidade com React Refresh no Vite (`eslint-plugin-react-refresh`).

## Testes

A suíte usa Vitest com teste inicial de renderização do `App` via `react-dom/server`.

Exemplo inicial coberto:

- renderização do componente `App`.

## Fluxo padrão de contribuição (pré-PR)

Antes de abrir PR, execute na raiz do projeto:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Esse fluxo garante estilo, tipagem, cobertura mínima de regressão e build íntegro.
