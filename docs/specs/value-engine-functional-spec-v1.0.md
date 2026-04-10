# Value Engine — Especificação Funcional Consolidada v1.0

- **Versão:** v1.0 fechada
- **Data de publicação:** 10/04/2026
- **Aprovadores:** Negócio, TI, Controladoria Estratégica

## 1. Objetivo

Consolidar, em documento único, as regras de negócio do backlog mestre do Value Engine, estabelecendo escopo funcional fechado para a versão v1.0.

## 2. Escopo funcional da v1.0

A v1.0 cobre o ciclo completo de planejamento, cálculo, revisão, aprovação e rastreabilidade do valor, com governança por competência temporal, execução em base zero e trilha de auditoria fim a fim.

## 3. Regras de negócio consolidadas

### 3.1 Workflow

1. **Estados oficiais do ciclo**: `Rascunho` → `Em Revisão` → `Aprovado` → `Publicado`.
2. **Transição controlada por perfil**: apenas perfis autorizados podem promover mudança de estado.
3. **Fluxo unidirecional na publicação**: após `Publicado`, não há edição direta; ajustes ocorrem por nova versão.
4. **Retorno para correção**: itens em `Em Revisão` podem retornar para `Rascunho` com justificativa obrigatória.
5. **Bloqueio de aprovação com pendência crítica**: não é permitido aprovar com validações críticas em aberto.
6. **Justificativa obrigatória em exceções**: toda quebra de regra de workflow requer motivo explícito e registro em auditoria.

### 3.2 Temporalidade

1. **Competência obrigatória**: todo registro deve possuir período de referência (ano/mês).
2. **Janela de edição por competência**: somente competências abertas podem receber alteração.
3. **Fechamento temporal**: competências fechadas tornam-se somente leitura para usuários operacionais.
4. **Reprocessamento controlado**: reabertura de competência fechada exige perfil de governança e justificativa.
5. **Sem sobreposição ativa**: não pode existir mais de uma versão ativa para a mesma entidade e competência.
6. **Publicação respeita corte temporal**: publicação só é permitida dentro da janela de calendário definida para a competência.

### 3.3 Base zero

1. **Inicialização sem herança automática**: cada competência inicia sem carregamento automático do período anterior.
2. **Composição explícita de valores**: todo valor precisa de premissa, driver ou item de cálculo identificado.
3. **Memória de cálculo obrigatória**: registros de valor devem conter fórmula/regra ou racional descritivo.
4. **Proibição de “copiar e colar cego”**: replicações exigem confirmação de premissas e recálculo.
5. **Controle de premissas padrão**: quando usada premissa padrão corporativa, deve haver vínculo explícito com sua versão.
6. **Rastreabilidade de origem**: cada número publicado precisa apontar para fonte e responsável.

### 3.4 Auditoria

1. **Trilha imutável de eventos**: criar, editar, transicionar estado, aprovar, publicar e reabrir devem gerar log.
2. **Campos mínimos de log**: usuário, data/hora UTC, ação, entidade, chave de registro e antes/depois.
3. **Justificativa em ações sensíveis**: reabertura, override e aprovação fora do fluxo padrão exigem justificativa.
4. **Versionamento sem perda histórica**: alterações não apagam histórico; sempre geram nova revisão.
5. **Consulta auditável**: logs devem ser filtráveis por período, usuário, entidade e tipo de ação.
6. **Integridade de evidência**: não é permitido excluir registros de auditoria por usuários funcionais.

### 3.5 Permissões

1. **Controle por papel (RBAC)**: permissões definidas por papéis e não por usuário individual.
2. **Separação mínima de funções**: quem elabora não pode ser o aprovador final do mesmo registro.
3. **Escopo por domínio organizacional**: usuário só visualiza/edita entidades dentro do seu escopo autorizado.
4. **Matriz de acesso por estado**: permissões variam por estado do workflow.
5. **Ações críticas restritas**: reabrir competência, alterar regra e publicar exigem papéis de governança.
6. **Acesso de auditoria em leitura ampliada**: perfis de auditoria podem consultar histórico completo sem editar conteúdo funcional.

## 4. Critérios de validação funcional

1. O sistema deve impedir transições inválidas de estado.
2. O sistema deve bloquear edição em competências fechadas para perfis não autorizados.
3. O sistema deve recusar aprovação/publicação sem rastreabilidade mínima de cálculo.
4. O sistema deve registrar 100% das ações sensíveis em trilha de auditoria.
5. O sistema deve aplicar segregação de função entre elaboração e aprovação.

## 5. Validação de consistência (sem duplicidades/contradições)

### 5.1 Método aplicado

- Leitura cruzada das regras de **workflow**, **temporalidade**, **base zero**, **auditoria** e **permissões**.
- Verificação de conflitos entre condições de transição, janelas de edição, segregação de função e exigências de log.
- Normalização de termos para evitar duplicidade semântica (ex.: “reabertura” e “reprocessamento controlado”).

### 5.2 Resultado da validação

- **Duplicidades:** não identificadas.
- **Contradições:** não identificadas.
- **Ajustes de consistência aplicados:**
  - Reabertura tratada como evento único com dupla exigência: permissão + justificativa + auditoria.
  - Publicação condicionada simultaneamente a estado válido do workflow e janela temporal aberta.
  - Base zero mantida compatível com replicação assistida, desde que haja reconfirmação de premissas e rastreabilidade.
  - Segregação de função alinhada com matriz de permissões para impedir autoaprovação.

## 6. Definição de pronto documental (DoD)

Para considerar esta especificação encerrada na v1.0:

1. Todas as regras listadas neste documento devem estar mapeadas em backlog técnico e testes.
2. Todos os perfis de acesso devem estar definidos na matriz RBAC oficial.
3. Logs de auditoria devem estar disponíveis para inspeção por Controladoria Estratégica.
4. Deve existir evidência de validação de consistência sem conflitos entre domínios.

## 7. Pontos em aberto

**nenhum**
