# Documentação dos Prompts Utilizados

## Prompt 1 — Contextualização e definição inicial

### Prompt enviado

> Quero criar um portfólio pessoal para a atividade de Full Stack da faculdade. O objetivo é apresentar minhas informações de forma profissional e organizada, funcionando como uma página pessoal para mostrar quem sou, minha formação, conhecimentos, projetos e experiências.
>
> Antes de começar a desenvolver, analise essa ideia e me mostre uma proposta de estrutura para o portfólio, com as principais seções e funcionalidades que fazem sentido. Não comece a programar ainda. Quero primeiro validar a estrutura do projeto.
>
> Leia e visualize os arquivos `.md` como base para o desenvolvimento, considerando escopo, MVP e o backlog como um todo.

### Objetivo

Contextualizar o OpenCode sobre o projeto antes de iniciar o desenvolvimento, apresentando a proposta do portfólio e os documentos de planejamento que já haviam sido definidos.

### Resultado obtido

O OpenCode apresentou uma estrutura inicial para o projeto, porém também sugeriu algumas funcionalidades e ferramentas que estavam fora do escopo definido.

### Análise crítica

Como esse primeiro prompt tinha principalmente a função de contextualizar a IA sobre o projeto, considerei o resultado útil para iniciar o desenvolvimento, apesar das sugestões que estavam fora do escopo.

Por isso, no próximo prompt deixei de forma mais explícita quais tecnologias poderiam ser utilizadas e quais deveriam ser evitadas.

---

## Prompt 2 — Estrutura inicial do portfólio

### Prompt enviado

> Agora vamos criar a estrutura inicial do portfólio com base no que definimos. Ele deve conter obrigatoriamente: apresentação pessoal, formação acadêmica, conhecimentos e competências, projetos, experiências relevantes, contato, hobbies/lazer e viagens.
>
> Organize essas informações de forma clara e com uma navegação simples. Quero que a estrutura seja preparada para receber minhas informações reais, sem inventar dados sobre mim.
>
> Use somente HTML, CSS e JavaScript. Bootstrap 5 pode ser utilizado se realmente ajudar. Não utilize React, Vue, Angular, Tailwind ou outras tecnologias de interface.

### Objetivo

Definir o escopo inicial do site e começar o desenvolvimento da estrutura básica do projeto, respeitando as tecnologias permitidas para a atividade.

### Resultado obtido

O OpenCode criou a estrutura inicial do portfólio, com os seguintes arquivos:

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── docs/
```

Também foram criadas as principais seções do portfólio:

- Início;
- Sobre Mim;
- Formação;
- Competências;
- Projetos;
- Experiências;
- Hobbies;
- Viagens;
- Contato.

Além disso, foram implementadas algumas interações em JavaScript, como navegação entre seções, menu mobile, animações, barras de progresso e feedback no formulário.

### Análise crítica

O resultado foi interessante como **placeholder**, pois criou uma estrutura completa para o portfólio sem utilizar informações pessoais reais.

Entretanto, como os dados ainda eram genéricos, decidi trabalhar posteriormente na possibilidade de preenchimento das informações, utilizando uma nova funcionalidade.

---

## Prompt 3 — Sistema de preenchimento do portfólio

### Prompt enviado

> Mantenha a forma que o site está como placeholder, um site genérico. Crie um botão como primeira coisa que se vê ao entrar na página, escrito "Preencher portfólio".
>
> Esse botão deve abrir uma página HTML com um formulário para colocar as informações que definimos que devem existir no site. Após o preenchimento, a pessoa clica em um botão e é redirecionada diretamente para o `index` novamente, porém com seus dados reais preenchidos.
>
> Como não podemos usar banco de dados, use `localStorage` para armazenar as informações. Após a página preenchida, deve existir um campo de edição, caso o administrador queira mudar algo.
>
> Não esqueça das regras de escopo que estipulamos.

### Objetivo

Tornar o portfólio funcional de forma que qualquer pessoa pudesse preencher suas próprias informações e gerar o conteúdo da página sem a necessidade de um banco de dados.

### Resultado obtido

O OpenCode criou uma página de preenchimento funcional, permitindo inserir os dados, armazená-los no `localStorage` e utilizá-los novamente no portfólio.

Também foi criada a possibilidade de editar as informações posteriormente.

### Análise crítica

Após analisar melhor o objetivo do trabalho, percebi que o site deveria representar **meu próprio portfólio**, e não necessariamente funcionar como uma ferramenta para outras pessoas criarem seus portfólios.

Por isso, decidi manter as minhas informações como placeholder no projeto.

Mesmo assim, mantive a funcionalidade de preenchimento e edição, pois considerei que ela poderia ser um diferencial interessante caso o projeto fosse futuramente utilizado como uma solução para criação de portfólios ou até mesmo em um trabalho como freelancer.

---

## Prompt 4 — Interações reais e correção de bugs

### Prompt enviado

> Quero que somente interações reais existam no portfólio. Analise quais interações fazem sentido para esse tipo de site e implemente apenas as que realmente melhorarem a experiência, como navegação, menu responsivo, filtros ou outras funcionalidades úteis.
>
> Não crie botões, links ou elementos que não tenham uma função real. Toda interação adicionada deve funcionar corretamente e ter um propósito dentro do projeto.
>
> Caso exista um botão sem função, delete ele. Nada de botões apenas por estética.
>
> Corrija o bug em que, ao preencher os dados, porém deixar os não obrigatórios vazios, continuam os dados do Lucas. Quero que, ao novos dados serem colocados, o que não for preenchido se torne um placeholder genérico. Os dados do Lucas só voltam caso eu limpe todos os dados preenchidos pelo usuário.

### Objetivo

Atender ao requisito de que não existissem botões ou interações sem função real e corrigir problemas encontrados no formulário de preenchimento.

### Resultado obtido

O OpenCode corrigiu o problema do formulário e ajustou o funcionamento das interações, deixando o projeto funcional apenas onde realmente era necessário.

### Análise crítica

O resultado foi satisfatório. Com as orientações específicas, o OpenCode conseguiu identificar e corrigir o bug apresentado.

Também considerei importante deixar explícito que elementos puramente estéticos sem função deveriam ser removidos, evitando funcionalidades "de mentira".

---

## Prompt 5 — Revisão e testes

### Prompt enviado

> Agora quero que você faça uma revisão completa do portfólio como se estivesse testando a entrega da faculdade.
>
> Verifique se todas as seções obrigatórias estão presentes, se os links e botões funcionam, se as interações JavaScript funcionam, se o layout continua correto em telas menores e se existem erros no HTML, CSS ou JavaScript.
>
> Não adicione novas funcionalidades sem necessidade. Primeiro identifique os problemas encontrados e depois faça as correções necessárias.

### Objetivo

Garantir que o projeto estivesse funcionando corretamente e de acordo com as orientações dadas pelo professor.

### Resultado obtido

O OpenCode identificou e corrigiu pequenas divergências entre o projeto desenvolvido e os requisitos definidos para a atividade.

### Análise crítica

Considero esse prompt satisfatório e útil, principalmente por ter funcionado como uma etapa de revisão antes da entrega.

Ele permitiu encontrar problemas que poderiam passar despercebidos durante o desenvolvimento normal.

---

## Prompt 6 — Auditoria final

### Prompt enviado

> Quero fazer uma auditoria final do projeto antes de entregar. Compare o site atual com os requisitos que definimos no início e verifique se tudo que foi planejado realmente está implementado.
>
> Confira principalmente: conteúdo obrigatório, histórias de usuário, critérios de aceitação, responsividade, navegação, interações JavaScript, HTML semântico, organização do código e funcionamento dos links e funcionalidades.
>
> Não invente novas funcionalidades. Se encontrar algum problema, explique qual é o problema e sugira a correção antes de alterar o projeto.

### Objetivo

Realizar uma última verificação do projeto, comparando a implementação final com os requisitos, histórias de usuário, critérios de aceitação e backlog definidos no planejamento.

Também foi importante deixar claro que a IA não deveria realizar alterações sem antes apresentar o problema e sugerir a correção.

### Resultado obtido

O OpenCode analisou os arquivos de planejamento e comparou o projeto com o que havia sido definido.

Ele implementou o que era possível realizar utilizando somente HTML, CSS e JavaScript e não tentou implementar funcionalidades que dependiam de tecnologias que estavam fora do escopo, como banco de dados.

### Análise crítica

O resultado foi muito positivo. Considero especialmente importante que o OpenCode tenha priorizado as instruções diretas dadas durante o desenvolvimento.

Mesmo existindo, por exemplo, uma funcionalidade relacionada a banco de dados classificada como **Must Have** no planejamento inicial, a instrução mais recente determinava que o projeto deveria utilizar somente HTML, CSS e JavaScript.

Nesse caso, a IA priorizou corretamente a restrição tecnológica estabelecida para o projeto e não tentou criar uma solução que não poderia ser implementada dentro do escopo da atividade.

Isso mostrou a importância de deixar as restrições claras durante a utilização da IA, principalmente quando o planejamento inicial possui requisitos que posteriormente precisam ser adaptados durante o desenvolvimento.

---
# Após inserção do IMPECCABLE
S
## Prompt 7 — Distill do fluxo de preenchimento (v2)

### Prompt enviado

> O fluxo de "preencher portfólio" faz parte de uma ideia criativa para que qualquer usuário que abrir o portfólio possa simular seu próprio site usando o meu como "placeholder". A ideia é demonstrar inovação, criatividade e manipulação de elementos visuais. Através do `distill`, corrija para que fique mais clara a minha ideia, sem passar a impressão de que é um furo de segurança. Registre tudo nos arquivos `.md`.

### Objetivo

Refinar o fluxo de preenchimento para comunicar a ideia criativa do "portfólio como molde" de forma clara, deixando explícito que a simulação é local (salva no navegador do visitante) e que a versão original do autor permanece publicada. O foco era eliminar a impressão de furo de segurança sem remover nenhuma funcionalidade.

### Resultado obtido

- Página `interatividade.html` reescrita como explicação destilada da ideia: molde criativo, simulação local, original intacto e controle total, com um único CTA "Começar simulação".
- CTAs da home ("Personalizar seu próprio portfólio" e "Preencher Portfólio") unificados em "Simular meu portfólio".
- Subtítulo do formulário esclarecendo a natureza da simulação local.
- Novo aviso "Modo demonstração" na home, exibido quando dados personalizados estão ativos, com ação "Ver original" que limpa os dados e restaura o portfólio padrão.
- Registro da decisão nos documentos `.md`: PRODUCT.md, PROJETO.md, docs/projeto.md, docs/mvp.md e README.md.

### Análise crítica

O `distill` trabalhou bem na essência do fluxo: o que deveria ser dito era a intenção criativa (simulação), e não o mecanismo técnico (localStorage). Ao trocar a linguagem defensiva por uma mensagem de controle ("ficou salvo só no seu navegador" e "o original permanece publicado"), a impressão de vulnerabilidade desapareceu sem perder a funcionalidade de preenchimento. A etapa explicativa foi mantida e destilada, e o aviso de modo demonstração fecha o ciclo no momento em que o visitante vê os próprios dados aplicados na home.

---

## Prompt 8 — Clarify da copy do fluxo de simulação (v2)

### Prompt enviado

> Faça esses ajustes.

(Refere-se à etapa `clarify` do plano: reescrever CTAs e textos do fluxo para não confundir visitante e administrador, removendo repetições e anunciando consequências reais das ações.)

### Objetivo

Ajustar a redação de `formulario.html`, `js/form.js`, `index.html` e `interatividade.html` para que a interface diga exatamente o que acontece (salvamento local, envio via `mailto`, apagamento irreversível) e que as ações reflitam o estado em que estão (editar/atualizar, apagar/voltar ao original), eliminando jargão e exigências não explicadas.

### Resultado obtido

- Subtítulo do formulário descreve a consequência ("veja o layout com as suas informações... salvo apenas neste navegador; a versão original permanece publicada").
- Legenda "Campos marcados com * são obrigatórios" adicionada (o `*` não era explicado antes).
- Alerta de campos faltantes direto, sem o "acima" enganoso.
- Confirmação destrutiva trocada de `confirm()` genérico por modal Bootstrap com ação nomeada "Apagar e voltar ao original" e aviso explícito de que a ação não pode ser desfeita.
- Labels corrigidos ("Foto — Sobre Mim") e jargão "Ícone (Bootstrap Icons)" simplificado para "Ícone".
- Botões remover (X) de grupos repetíveis com `aria-label` nomeado por item.
- Modo edição coerente: "Editar Portfólio" / "Atualizar Portfólio".
- `index.html`: grafia "con historia" corrigida para "com história"; nota honesta sob o botão de contato anunciando a abertura do aplicativo de e-mail.

### Análise crítica

O `clarify` foi bem-sucedido porque tratou a copy como promessa: cada botão agora anuncia a consequência que de fato produz. O `confirm()` genérico era um risco real — um visitante que clicasse mal perderia toda a simulação sem aviso adequado. O modal com ação destino e consequência explícita fecha essa lacuna. A legenda de obrigatórios e a nota do `mailto` eliminam surpresas em campos e no contato. A sintaxe JS foi validada com `node --check`. A leitura do fluxo permanece clara após a etapa; pendências seguintes são hierarquia (`typeset`), espaçamento (`layout`), robustez (`harden`) e o contraste Bootstrap (`audit`).

---

## Prompt 9 — Typeset do sistema tipográfico (v2)

### Prompt enviado

> Crie a hierarquia visual, trazendo aparência de inovação e criatividade (proposta que o projeto tem desde a sua criação). Retire qualquer cara de slop de IA do projeto.

(Refere-se à etapa `typeset` do plano: corrigir hierarquia e heading pulado no formulário e dar identidade tipográfica autoral ao projeto.)

### Objetivo

Substituir a tipografia genérica (Inter, o maior vetor de "cara de AI"/template) por um sistema com hierarquia distinta, corrigindo a escala plana do formulário, o heading pulado no alerta e os problemas de leitura no mobile — mantendo legibilidade, contraste e caret do sistema navy/verde.

### Resultado obtido

- Nova dupla tipográfica: **Onest** (corpo e UI) + **Spectral** (serifa autoral para nome, títulos editoriais e destaque), carregada via Google Fonts nas cinco páginas.
- Rampa escalonada display → headline XL/base/SM → title → body → label → meta, com o nome em serifa destacada e support sections menores por decisão de hierarquia.
- Formulário e `interatividade.html` com hierarquia corrigida (h1 de página em tamanho digno; heading pulado do alerta resolvido).
- Leitura ajustada: 56–60ch, entrelinha/tracking próprios do fundo escuro, campos em `1rem` (previne zoom do iOS).
- Mobile: override antigo do hero removido, rampa fluida `clamp` prevalece; sem `all-caps` no cargo.
- Craft floor: eyebrows das páginas de documentação removidos, sublinhado verde do `.section-title` eliminado, inline style de `js/script.js` convertido, selection/caret/scrollbar temáticos.
- `DESIGN.md` atualizado com a nova rampa e tokens tipográficos.

### Análise crítica

O `typeset` foi a intervenção mais decisiva contra a "cara de slop": Inter é a fonte padrão que o gerador de IA usa por padrão e o detector a flagava em todas as páginas (`overused-font`). A serifa no nome e nos títulos editoriais dá autoria e um pico visual claro, enquanto o grotesco mantém leitura profissional no corpo. A escala plana do formulário foi corrigida na raiz (rampa), não com remendos pontuais. Validação por escaneamento mecânico `--scope type` limpo e inspeção de fonte; os screenshots renderizados não puderam ser inspecionados nesta sessão, ficando como ponto de verificação visual em ciclo posterior (`live`/`adapt`).

---

## Prompt 10 — Layout (respiro, leitura e pontos do formulário)

### Prompt enviado

> Deixe o layout mais atrativo e agradável de se visualizar. Arrume os pontos ditos sobre o formulário também.

(Refere-se à etapa `layout` do plano: revisar os `cramped-padding` do formulário e o respiro geral.)

### Objetivo

Tornar o visual mais confortável e agradável, resolvendo os pontos conhecidos do formulário: legibilidade do alerta de campos faltantes, campos escuros coerentes com o tema e compactação de cards/seções.

### Resultado obtido

- Alerta de campos faltantes com texto em âmbar explícito, eliminando a leitura `4.4:1` (muted sobre fundo âmbar translúcido).
- Fim do `wide-tracking` em corpo (`.experience-item h4` `0.04em` → `0.035em`) e da hierarquia plana em cards (card-title `1.13rem`; degrau body→h3 em `1.25:1`).
- Campos do formulário com texto digitado em slate claro (`#e2e8f0`) e `color-scheme: dark` em `body` e controles, padronizando widgets nativos ao tema escuro.
- `DESIGN.md` atualizado na seção de inputs/controles.

### Análise crítica

O `layout` fechou bem os dois últimos avisos tipográficos da rampa e devolveu legibilidade ao alerta do formulário. O ponto mais valioso da validação foi o diagnóstico do achado clássico de hover `2.5:1`: o detector resolve os tokens `--color-accent-hover/deep` como `#10b981` por heurística, mas a cascata real usa `#047857`/`#065f46` (≥`5.8:1` com branco) — confirmando que não há superfície real de branco sobre esmeralda. Restam apenas os 5 avisos de `section-padding` documentados como falso positivo (seções full-bleed com `.container`). A confirmação visual em navegador fica para o ciclo `live`/`audit` final, sem prioridade de código.

---

## Prompt 11 — Harden (robustez do fluxo de simulação)

### Prompt enviado

> Execute as mudanças necessárias.

(Refere-se à etapa `harden` do plano: tratar estados do formulário, imagens ausentes, quota de `localStorage` e falhas não anunciadas, alerta com `aria-live` e foco/scroll no primeiro campo pendente.)

### Objetivo

Endurecer o fluxo de simulação contra entradas externas inseguras (URLs, e-mail, WhatsApp, imagens) e falhas de armazenamento, eliminando o duplo envio e garantindo anúncio acessível de erros e foco dirigido ao problema.

### Resultado obtido

- Helpers seguros: `storageGet`/`storageRemove`, `safeUrl` (só `http`/`https`), `safeEmail` e `cleanWhatsApp` (dígitos, ≥10 para montar link).
- Links sanitizados em herói/sobre/contato/rodapé; imagens injetadas com `loading="lazy" decoding="async"` e fallback sem `src` quebrado.
- `js/form.js`: salvamento com `try/catch`, imagem >1,5 MB bloqueada com mensagem, pré-checagem do JSON (~4 MB) antes do `setItem`, quota/erro tratados com restauração do botão; botão desabilitado antes da leitura assíncrona (fim do duplo-submit) e reabilitado em qualquer erro; revalidação por delegação (cobre grupos dinâmicos); `FileReader` com erro tratado; alerta `aria-live` `#saveErrorAlert`.
- CSS: `overflow-wrap` generalizado, `text-wrap: balance` no título do hero, `.skill-tags` flex com `min-width: 0`, `prefers-reduced-motion` estendido.
- HTML: `maxlength` + `inputmode` (`email`/`tel`/`url`) nos campos; foto "Sobre" lazy.

### Análise crítica

O `harden` transformou as bordas de confiança em behavior explícito: um visitante não consegue mais gravar um link `javascript:` ou repetir o clique de salvar, e um admin iniciante recebe uma mensagem clara quando a imagem passa do limite ou o browser recusa a quota. Do ponto de vista da comprovação da atividade, o mais relevante foi a execução de helpers testados (rejeição de URLs `javascript:`/relativas/protocol-relative, e-mail sanitizado, WhatsApp normalizado) e a validação `node --check` nos dois JS, sem falha nova no detector. A combinação `maxlength` + `inputmode` também melhora a experiência mobile de teclado, uma pendência apontada desde a crítica original.

---

## Prompt 12 — Polish + correção do fallback de imagem no mobile

### Prompt enviado

> Faça o acabamento das questões que avaliar necessárias. Além disso, arrume esse erro, onde na versão para mobile, a mensagem de "sem imagem selecionada" aparece por trás de minha foto.

(Refere-se à etapa `polish` do plano, acrescida de uma correção de bug relatada pelo autor.)

### Objetivo

Aplicar o acabamento final do ciclo da v2 e corrigir o bug visual em que o texto "Sem imagem selecionada" aparecia atravessando a foto de perfil (PNG sem fundo) na versão mobile.

### Resultado obtido

- Fallback de imagem passa a existir apenas no estado `.no-image`: oculto enquanto há imagem, `display: flex` somente no estado vazio — corrigido de uma vez para herói, Sobre, Projetos e Viagens.
- Contraste do fallback no herói elevado de `rgba(148,163,184,0.5)` (~`2.7:1`) para `--color-text-muted` sólido (~`7:1`).
- Removido o cap `img { max-width: 90% }` global que criava margem interna assimétrica nas fotos (agora `100%`).
- Cards de projeto/viagem sem imagem recebem `no-image` em `js/script.js`, mantendo a mensagem de estado vazio.

### Análise crítica

O bug era estrutural: o fallback ficava sempre renderizado em `inset: 0` sob a foto, e como o PNG de perfil não tem fundo, o texto vazava por ela. A correção no gatilho `.no-image` resolve as quatro superfícies de imagem de uma só vez e melhora também o contraste do estado vazio no herói (que estava abaixo do AA). A verificação via DevTools Protocol confirmou as imagens carregando, `display: none` no estado com imagem e `flex` só no vazio, sem erros de console. Os screenshots de referência ficaram em `Temp/opencode/` para um ciclo visual futuro (`live`). Com isso o ciclo funcional da v2 está fechado; a próxima etapa é a medição por `critique`.

---

## Prompt 13 — Critique da 4ª rodada (pós-ciclo v2)

### Prompt enviado

> Avalie o projeto agora, considerando todas as alterações feitas nesse último ciclo.

### Objetivo

Medir o resultado acumulado de `distill`, `clarify`, `typeset`, `layout`, `harden` e `polish`, reavaliando as pendências à luz da decisão do autor de manter a simulação como vitrine criativa (presente no hero por intenção).

### Resultado obtido

- Pontuação subiu de `24/32` para `25/32`.
- Redefinição de escopo: o CTA "Simular meu portfólio" no hero é intencional (vitrine de inovação), não ruído — o fix passou a ser remover redundâncias, não o destaque.
- Pendências resolvidas no `distill`: botão flutuante `#btnEditar` removido (redundante com o CTA do hero) e pesos do hero reequilibrados — "Baixar Currículo" dominante, "Simular meu portfólio" como vitrine secundária explícita em link sutil.
- Pendências restantes: bloco de ~90 linhas de `!important` nos botões (estado `2.5:1` nas cinco páginas); semântica dos badges afastada dos tokens (verde para tudo, azul documentado e violeta ausentes; cores `#60a5fa`/`#fca5a5` e `8px` fora do DESIGN.md); CSS morto e `docs/projeto.md` desatualizado.
- P3 guardado: disclosure do formulário e navegação com 9 destinos.

### Análise crítica

A estagnação em `24/32` durante as duas rodadas anteriores e a subida para `25/32` neste ciclo indicam que os ganhos de acabamento vêm diminuindo e que os próximos pontos são de consistência do sistema (tokens, estados de botão, semântica de cores) e de escopo decidido pelo autor (vitrine). A decisão mais importante desta rodada foi tornar o "problema de fluxo" em "redundância de CTAs" — documentando o hero como intenção de produto, e não como defeito. Restam oportunidades claras: tokenizar os estados dos botões para aposentar o `!important`, restaurar a semântica cromática dos badges documentada desde a crítica original e limpar o CSS morto.

---

## Prompt 14 — Distill do hero (remoção do botão flutuante + reequilíbrio de pesos)

### Prompt enviado

> Remover o botão flutuante #btnEditar redundante e reequilibrar o hero ("Baixar Currículo" dominante).

### Objetivo

Executar o primeiro fix do plano pós-crítica 4: eliminar a redundância de CTAs no primeiro viewport (botão flutuante + CTA do hero + link), deixando uma única ação primária de evidência (currículo) e a simulação como vitrine secundária explícita.

### Resultado obtido

- `#btnEditar` removido de `index.html` e de `js/script.js` (refs 272/285 e ramo `else` órfão); regras `.btn-editar` e `.interactive-page .btn-editar` excluídas de `css/style.css`.
- `.btn-primary-cta`: ação dominante (verde sólido, peso 700, `1.05rem`, padding maior, sombra).
- `.btn-secondary-cta`: vitrine secundária em link sutil (peso 600, `0.95rem`, ícone esmeralda, underline discreto, sem borda de botão).
- Overrides responsivos (768px/576px) recriados para manter a hierarquia no mobile (primário em largura total, secundário como link).

### Análise crítica

O `distill` resolveu a porta redundante na raiz: antes o mesmo viewport oferecia "Baixar Currículo", "Simular meu portfólio" e o botão flutuante "Simular meu portfólio" em `display:flex` — o público principal recebia duas portas para o gimmick e a ação de evidência perdia peso relativo. Com a remoção e o redesenho das classes de CTA, a hierarquia voltou a ser única e clara. Validação estática (`node --check` e busca por referências órfãs) sem falhas; a inspeção por screenshot ficou para o ciclo `live`, pois o ambiente não oferecia navegador nesta rodada. Próximo fix do plano: `audit`+`harden` nos estados dos botões.

---

## Prompt 15 — Audit técnico (estados de botão, `!important` e 2.5:1)

### Prompt enviado

> Tokenizar estados dos botões, aposentar o bloco !important e eliminar o 2.5:1.

### Objetivo

Diagnosticar (via `audit`) as três dívidas confirmadas na crítica 4: estados de botão fora do modelo de tokens, o bloco de ~150 linhas de `!important` e o par branco/esmeralda `2.54:1`, com contraste verificado por cálculo WCAG 2.1.

### Resultado obtido

- **Audit Health Score 12/20 — Acceptable.** Detector sem achados automáticos; nenhum P0; 3 P1 e 3 P2.
- P1 — Estados de botão sem tokens (`:active`/`:focus`/`:disabled` ausentes; nomenclatura invertida repouso/hover; outlines do Bootstrap fora da paleta: `#0d6efd` 3.97:1 e `btn-outline-dark` 1.16:1, invisível no navy).
- P1 — Bloco «CORREÇÕES DE CONTRASTE PARA DARK MODE» com 52 `!important` (dívida estrutural; Bootstrap contra o sistema de tokens).
- P1 — `button-primary` do DESIGN.md com **2.54:1** branco/`#10b981` — reprova AA; o CSS atual só escapa pelo uso de `#047857` no repouso.
- P2 — footer 4.09:1; `btn-outline-primary` 3.97:1 fora da paleta; default do Bootstrap não tematizados.
- Positivos: base de acessibilidade forte (skip-link, labels, alt, reduced-motion), corpo de texto 6.96:1/14.5:1, tokens reais em `:root`, responsivo sólido.

### Análise crítica

A auditoria discriminou falhas de *sistema* de falhas de *identidade*: a identidade navy/verde está preservada e coerente, mas o theming do Bootstrap foi feito por remendo (bloco `!important`), os estados de botão foram reinventados seis vezes e o token documentado no DESIGN.md codifica literalmente o par `2.54:1` que a crítica apontava. O score 12/20 é "acceptable" porque a base semântica e de contraste do corpo é sólida; os P1 são todos resolvíveis por tokenização e limpeza (`extract` + `harden` + `polish`). Não houve alteração de código nesta rodada — o `audit` é diagnóstico.

---

## Prompt 16 — Overdrive "Cidade-Código" (portfólio vivo)

### Prompt enviado

> Overdrive para um portfólio animado. Torne essa apresentação em um portfólio vivo onde os usuários se sintam em uma experiência. Faça a transformação parecer extraordinária e inovadora.

### Observação de execução

O processo foi iniciado na sexta-feira e interrompido pelo desligamento do computador no meio da execução. Retomado em sessão nova sobre o estado atual do repositório; o resultado abaixo corresponde à execução concluída.

### Objetivo

Transformar a primeira impressão numa experiência "viva": o portfólio comporta-se como um sistema que liga, reconhece, carrega e respond ao scroll, sem trocar a identidade navy/verde nem adicionar novas dependências.

### Resultado obtido

- **Boot de terminal** na abertura ("cidade-código · sistema online"), com barra de progresso e dica para pular.
- **Nome desmontável**: overlay fantasma (`od-ghost`, `aria-hidden`) desintegra o nome do hero letra a letra ao sair do viewport, sem tocar o layout real.
- **Trilho-sinal** no canvas de partículas: linha de energia vertical com cometas e um nó por seção; módulo ativo pulsa.
- **Títulos que entram online** letra a letra com traço sublinhado crescendo da esquerda; **linha de vida da formação** carregando como circuito.
- **Hero como planta urbana**: grade de blueprint sutil + retrato holográfico que segue o cursor (desktop).
- **Telemetria desktop** fixa ("INÍCIO · 0% … CONTATO · 100%") atualizada em tempo real.
- Novos arquivos `js/overdrive.js` e `css/overdrive.css`; tokens `--color-accent-bright` e componentes (telemetry, charge-line, progress-rail, boot-window) documentados no DESIGN.md.

### Análise crítica

O `overdrive` adicionou a assinatura de experiência pedida com custo contido: zero dependências novas, `node --check` OK e boot headless limpo. Os flags do detector que sobraram são do mundo já comprometido (boot/partículas respeitam `prefers-reduced-motion`; glow usa offset; o dot decorativo foi removido). O maior risco da camada é peso/performance e leitura em dispositivos lentos — por isso, os próximos ciclos devem medir a home com o overdrive ativo (`critique`/`audit`/`adapt`/`optimize`) e concluir os fixes de tokens de botão iniciados antes da interrupção (`extract`+`harden`). A atividade permanece puramente front-end, alinhada à decisão de não usar backend.

---

## Prompt 17 — Distill da animação (suavização do overdrive)

### Prompt enviado

> Gostei muito do resultado (especialmente da introdução da página abrindo e do brilho no hero). Entretanto, quero que você suavize a animação do cursor mexendo na página fora do hero (está muito exagerado) e também um pouco dos elementos visuais da página escrolando para baixo (como a barra de conclusão no canto esquerdo, pois já temos a porcentagem no canto). Não altere a animação de entrada e nem o hero.

### Objetivo

Calibrar a camada "Cidade-Código" conforme o feedback do autor: reduzir a intensidade do campo de partículas fora do hero e eliminar a redundância visual da barra de conclusão do canto esquerdo, preservando a animação de entrada (boot) e o tratamento do hero integralmente.

### Resultado obtido

- Campo de partículas (cursor, fora do hero): raio de repulsão `130→90px`, força `0.16→0.05`, acoplamento ao scroll lateral `0.4→0.12`, linhas de constelação com distância `85→64px` e opacidade `0.22→0.12`.
- Trilho-sinal/barra de conclusão do canto esquerdo (`drawRailShadow`, com nós de seção, carga e cometas) removida por inteiro; navbar (barra fina do topo) e telemetria permanecem como os portadores do progresso.

### Análise crítica

O feedback do autor confirma o acerto dos dois picos emocionais da camada (entrada e hero) e aponta excesso justamente nas camadas ambientais — o campo de partículas reagindo forte fora do hero e o terceiro portador de progresso. A calibração seguiu a regra do ofício do projeto: o efeito existe para servir o conteúdo, não competir com ele. A remoção do trilho-esquerdo não perde informação, pois a telemetria já diz o módulo e a porcentagem — antes eram três sinais de progresso (navbar, telemetria, trilho), agora dois. Validação via CDP (sintaxe, runtime e estado da telemetria), sem inspeção visual por screenshot nesta sessão.

---

## Prompt 18 — Extract (tokens de estado + migração dos utilitários)

### Prompt enviado

> Execute a extração de tokens e a migração (escopo completo) para fechar o plano da auditoria.

(Refere-se ao `extract` do plano pós-auditoria: tokens de estado de botão na família `#047857`/`#065f46`, mapeamento dos `btn-*` do Bootstrap, semântica de badges por token, aposentadoria do bloco `!important`, remoção do CSS morto e sincronização do `DESIGN.md`.)

### Objetivo

Transformar os achados de sistema do `audit` (12/20) em código: dar aos estados de botão um lar único em tokens, substituir o theming do Bootstrap feito por `!important` pelas variáveis nativas, restaurar a semântica cromática dos badges e alinhar a documentação aos valores reais.

### Resultado obtido

- **`:root` reorganizado:** primitivas de canal RGB, semântica (superfícies, texto, acento, estado), superfícies (`--surface-border`, `--surface-border-strong`), botões (`--btn-bg/hover/active/fg/radius`), foco (`--focus-ring`, `--focus-outline`), tipografia (com `--font-mono` trazido do overdrive), espaçamento (`--space-section*`), raio (`--radius-xs/sm`, `--btn-radius`) e movimento (`--ease-out-expo`, `--ease-standard`).
- **Bloco `!important` eliminado:** os 52 usos do bloco «CORREÇÕES DE CONTRASTE PARA DARK MODE» foram trocados por variáveis nativas — `--bs-btn-*` (estados de botão), `--bs-alert-*` (alertas de faltantes e erro, com `color: inherit` no heading), `--bs-card-border-color`/`--bs-card-cap-bg` e `--bs-navbar-*`.
- **Badges semânticos:** `.badge-accent` (verde), `.badge-info` (`#60a5fa`) e `.badge-tertiary` (`#a78bfa`); Soft Skills deixam de repetir o verde de linguagens e ferramentas.
- **Utilitários próprios:** `.text-accent`, `.text-soft`, `.text-info-soft`, `.text-tertiary`, `.text-on-dark`, migrando `index.html`, `formulario.html`, `js/script.js` e `js/form.js`.
- **Overdrive tokenizado:** sem hex cru no CSS (gradientes em tokens) e sem cores/easing hard-coded no `js/overdrive.js` (helper `cssVar` lê `--color-accent-*` e `--ease-out-expo`); o `display:none` do boot em `prefers-reduced-motion` deixou de exigir `!important`.
- **CSS morto removido:** `.btn-preencher`, `.social-icons`, regras/refs de `.hero-links`, `.hero-section .lead`; `p-4` e `me-3` absorvidos por `.experience-item` e `.btn-finalizar`.
- **DESIGN.md sincronizado:** rampa de acento, cores novas (`#60a5fa`, `#fca5a5`, `#a78bfa`, `#7dd3fc`, `#5eead4`), raios `4/6/8/10`, `button-primary` em `#047857` (fim do par `2.54:1`), chips e navbar por token.

### Análise crítica

O `extract` atacou a raiz do que a auditoria chamou de dívida estrutural: o `!important` existia porque o sistema tentava sobrepor o Bootstrap por fora; agora cada família de componente define as próprias variáveis (`--bs-*`) e os valores de estado moram em um só lugar (`--btn-*`). A migração dos badges devolve significado à cor (técnico/tool/soft skill) e o corte de tokens órfãos faz o `:root` descrever somente o que o código usa. A verificação foi estática (`node --check`, balanceamento CSS, varredura de `var()`), consistente com as rodadas anteriores; a confirmação visual por screenshot continua dependente do ciclo `live`. Com isso, o `polish` final e uma nova medição `critique`/`audit` passam a ser os próximos passos.

---

## Prompt 19 — Polish final (contrastes e acabamento pós-extract)

### Prompt enviado

> Faça o próximo polimento.

### Objetivo

Fechar a passada final do plano da auditoria: eliminar o último aviso real do detector, garantir contraste AA nos botões de perigo/variante e sanar os pontos de consistência restantes, sem retroceder o que o `extract` acabou de estabelecer.

### Resultado obtido

- `dark-glow` eliminado: brilhos cromáticos neutralizados em `.od-charge`/`.od-progress span` (overdrive) e o halo do `.timeline-dot` virou anel 1px + sombra neutra offset.
- Contraste AA: hamburger danger `#ef4444`→`#dc2626` (4.85:1) e secondary ativo `#3b82f6`→`#2563eb` (5.2:1); token `--color-error-deep` criado e documentado.
- Firefox scrollbar padronizado (`scrollbar-color`/`scrollbar-width`).
- Indentação do hero de `index.html` corrigida; links sociais do demo mode usando `.social-link` (círculos) como o estado estático.
- DESIGN.md com a linha de danger; `docs/projeto.md` já refletia a paleta verde (pendência do azul encerrada).

### Análise crítica

O detector final rodou com exit 0 e sem novidades. O achado `2.5:1` (branco sobre `#10b981`) que acompanhou o projeto por quatro rodadas foi finalmente comprovado como falso positivo via `CSS.forcePseudoState` (49 elementos candidatos, 0 matches reais); os `cramped-padding` ×5 decorrem da heurística ler `.container` centralizado por margem como "sem inset"; os dois advisories restantes (janela de boot, planta urbana do hero) são decisões intencionais já documentadas no DESIGN.md. O ciclo fecha com os avisos do detector todos explicados, um número redondo de `!important` zerado e o modelo de tokens descrito unicamente pelo que o código usa — condição para a próxima medição medir de fato o projeto, não a dívida.

---

## Prompt 20 — Critique da 5ª rodada (pós-overdrive e ciclo extract/polish)

### Prompt enviado

> Critique pós novo ciclo + adição da animação do overdrive.

### Objetivo

Medir o projeto com a camada "Cidade-Código" ativa e o ciclo extract/polish fechado, avaliando pela primeira vez o mundo animado sob os critérios da crítica.

### Resultado obtido

- **Pontuação: 26/32 (Good, ~81%)** — subiu de 25. Método degradado (A+B no mesmo contexto, sem leitura de imagem); screenshots em `.impeccable/review/`.
- Resolvido: advisories de cor e raio fora do DESIGN.md; badges semânticos e `!important`/CSS morto aposentados.
- Novos achados: `codex-grid-background` (planta urbana do hero) e `gpt-thin-border-wide-shadow` (janela de boot); o par `2.5:1` segue como falso positivo não re-verificado em navegador.
- Prioridades ordenadas com o autor: 1) boot na primeira dobra (P1), 2) excesso de momentos "sistema" e o grid (P1), 3) pin do `2.5:1` + `aria-current` (P2), 4) polish de fechamento.

### Análise crítica

Como o próprio relatório resumiu: *"o maior salto desta rodada não é visual, é de sistema — o projeto parou de dever tokens e documentação."* É essa base limpa que faz o overdrive entrar como assinatura legítima; mas ele paga caro na dobra — um recrutador recebe uma tela cheia de terminal fingindo boot antes de ver nome, cargo e currículo, e três dos recursos mais vistosos (boot, partículas, grid) são justamente os clichês de "portfólio de dev" que o detector reconhece como UI gerada. A crítica orienta escolher um pilar visual (nome em cacos + lâmpada são os mais autorais) e rebaixar os clichês ao redor — o que muda a primeira impressão de "brinquedo técnico" para "prova profissional", sem apagar a assinatura.

---

## Prompt 21 — Distill da primeira dobra (fixes da 5ª crítica)

### Prompt enviado

> Corrija as imprecisões relatadas no critique.

(Refere-se ao fix 1 do plano pós-crítica 5: calibrar a primeira dobra e eleger um pilar visual.)

### Objetivo

Reduzir o custo da primeira impressão apontado na 5ª crítica — o boot full-screen (~2,4 s) como "portão de brinquedo técnico" e os momentos "sistema" competindo na dobra — eleger o nome em cacos + lâmpada como pilar e rebaixar os clichês, sem abandonar a assinatura "Cidade-Código".

### Resultado obtido

- **Boot full-screen → faixa fina no topo (~0,5 s):** duas linhas destiladas + barra abreviada + exit em slide-up; conteúdo visível de imediato, sem a decisão de "pular?". A janela com `1px border + blur 48px` e a sombra fora de vocabulário (`0 24px 48px`) saíram do código (`gpt-thin-border-wide-shadow` eliminado do detector).
- **Partículas rebaixadas:** constelação removida, densidade e alfa reduzidos.
- **Telemetria em disclosure progressiva:** só aparece depois que o hero sai do viewport (`scrollY > 85%` do hero), revelando o "sistema" no scroll.
- **Planta urbana em grid preservada** para o `overdrive` (refino) do plano; DESIGN.md com o token `boot-strip` no lugar de `boot-window`.
- `PROJETO.md` item 26 registrado; `node --check` OK; headless com telemetria oculta em `scrollY=0` e visível após scroll.

### Análise crítica

A correção distinguiu formato de assinatura: o gesto de terminal segue presente, mas como borda de status proporcional ao sistema, e não mais como um diálogo que bloqueia a prova profissional. Esconder a telemetria da dobra e reduzir partículas devolve hierarquia ao que o recrutador veio ver, sem remover nenhum recurso documentado. O detector passou a acusar apenas o grid intencional (deferido) e os falsos positivos já documentados (2.5:1 e cramped-padding), confirmando que os clichês remanescentes da camada estão isolados no que ficou para os próximos ciclos.

---

## Prompt 22 — Overdrive II "A cidade acorda" (refino da camada)

### Prompt enviado

> Faça essa substituição.

(Refere-se ao fix 2 do plano pós-crítica 5: substituir a planta urbana em grid por um padrão "Cidade-Código" próprio.)

### Objetivo

Aposentar o `codex-grid-background` (a assinatura genérica de "portfólio de dev" que o detector reconhece) e dar à camada um padrão visual que pertença ao mundo já documentado, mantendo `prefers-reduced-motion`.

### Resultado obtido

- **Onda de energia da cidade** no canvas existente: maré de linhas-andar que acende conforme o scroll (`drawCity` em `js/overdrive.js`), com janelas cintilantes e brilho residual; dorme no topo e desperta ao descer.
- **Varredura do hero**: linha de luz que desce pela primeira dobra.
- **Dissolução do retrato (`od-rip`)**: a foto se rasteriza em linhas de varredura com dessaturação/brightness ao sair do hero.
- **Power-on dos blocos**: cards/timeline/hobbies/experiências/form recebem flood de energia com stagger ao entrar no viewport.
- **Bug pré-existente corrigido**: a telemetria nunca aparecia (div sem `id="odTelemetry"`, overlay preso em `opacity:0`) — corrigido em `index.html`.

### Análise crítica

A substituição trocou o clichê por um padrão que é derivado do próprio mundo da camada: as linhas do grid genérico viraram "janelas" de uma cidade que energiza com o scroll — a mesma metáfora de módulos da telemetria e da linha de vida. O `od-rip` ainda aproveita a foto transparente do autor e a transforma num detalhe coerente com a linguagem de varredura. A verificação por CDP (desktop 1440×900, mobile 390×844 e reduced-motion) confirmou a cidade dormindo no topo, o dissolve ativo, o sweep com stagger e o desligamento total sob a preferência de movimento; o detector não encontrou antipadrão novo. Com o grid aposentado, resta pinar o `2.5:1` no navegador e fechar o ciclo com `polish`.

---

## Prompt 23 — Distill (calibração da varredura e do boot-strip)

### Prompt enviado

> Corrija o efeito de linha de luz descendo, pois está exagerado, causando até desconforto de olhar. Além disso, deixe a animação de login que aparece perto da navbar mais lenta, pois como não atrapalha a visualização do resto da página, deixá-la ali em cima mais tempo dá mais oportunidade do usuário ver a animação.

### Objetivo

Suavizar a linha de varredura (`.od-scan`) que causava desconforto visual e prolongar a permanência do boot-strip no topo, mantendo ambos os efeitos desativáveis por `prefers-reduced-motion`.

### Resultado obtido

- **`.od-scan`**: banda de `26%`→`16%` de altura, brilho de pico cortado ~5× (gradiente `0.16`→`0.06`, keyframe `0.9`→`0.5` com fade) e cadência `15s`→`26s` — virou varredura ambiente, não estroboscópio.
- **Boot-strip**: digitação `2ms`→`24ms`/char, pausas `70ms`→`340ms`, barra `0.3s`→`0.6s`, retenção final `320ms`→`480ms` — legível ~3 s sem bloquear a página.

### Análise crítica

O desconforto da varredura vinha da intensidade (participação de alfa e altura da banda), não da existência do efeito — reduzir alfa ~5× e jogar a cadência para 26 s preserva a metáfora de "sistema fazendo scan" sem fadiga ocular. O boot-strip, por ser fino e não bloquear a leitura, ganha ao permanecer mais tempo: é o único momento em que a assinatura "Cidade-Código" se anuncia por texto, e o usuário agora tem tempo de lê-la. Ambos seguem desarmados sob `prefers-reduced-motion`. O detector não apontou nada novo além do advisory intencional do fundo-cidade.

---

## Prompt 24 — Remoção completa da varredura `.od-scan`

### Prompt enviado

> Call skill({ name: "impeccable" }) e siga as seções "Setup" e "Commands" para lidar com o overdrive: retire completamente o `.od-scan`, pois está me incomodando essa animação exagerada.

### Objetivo

Remover por completo a linha de luz descendente (`.od-scan`) da primeira dobra, sem substituto, preservando o restante da camada "Cidade-Código" e o respeito a `prefers-reduced-motion`.

### Resultado obtido

- Elemento removido de `index.html` (a div `.od-scan` dentro da section do hero).
- Em `css/overdrive.css`: o bloco `.od-scan`, o `@keyframes od-scan-drop` e a entrada na query `prefers-reduced-motion` foram apagados.
- Documentação atualizada em `PROJETO.md` (entrada 29) e neste registro.

### Análise crítica

A metáfora de "sistema fazendo scan" já era sustentada pelo boot-strip e pela dissolução do retrato (`od-rip`); a passada recorrente era o único movimento perpétuo na primeira dobra e competia com a leitura, mesmo com o brilho calibrado pelo distill. Removê-la elimina a fonte de desconforto do autor sem descaracterizar a assinatura "Cidade-Código". `prefers-reduced-motion` segue desarmando os demais efeitos; o detector não apontou novos antipadrões.

---

## Prompt 25 — Remoção do campo de granulação em tela cheia

### Prompt enviado

> Remova o efeito de granulação que aparece no site todo ao descer do hero. Achei que tirando o .od-scan resolveria, mas ainda está. Tire completamente essa parte da animação.

### Objetivo

Eliminar a granulação full-screen percebida ao descer do hero e identificar a verdadeira origem do "ruído" que persistia após a remoção do `.od-scan`.

### Resultado obtido

- **Origem encontrada:** o canvas fixo `#odField` (`index.html`) desenhava sobre a página inteira o campo de partículas + as bandas de luz "cidade" com janelas que acendiam conforme o scroll — era essa granulação perceptível em todo o site, não a varredura do hero.
- **Removido:** o canvas de `index.html`, os blocos `.od-field` (base e `prefers-reduced-motion`) do CSS, e toda a renderização de campo/partículas/cidade (`drawCity` etc.) do `js/overdrive.js`.
- **Preservado:** os efeitos confinados ao hero num scroll-handler `updateHeroLeave()` — nome em cacos (`ghost`), dissolução do retrato (`od-rip`), dreno do título/foto — além de boot-strip, lâmpada, tilt, telemetria, progresso e power-on dos blocos.

### Análise crítica

A lição do feedback é de atribuição: a granulação era o canvas de tela cheia; o `.od-scan` era apenas o sintoma mais evidente de uma camada que "cintilava" demais por cima do conteúdo. Ao confinar toda a animação a elementos da página (hero e scroll), o site desce limpo e a assinatura "Cidade-Código" permanece exatamente onde não cansa o olhar. O `prefers-reduced-motion` segue respeitado e o detector não encontrou novos antipadrões — restam apenas os achados pré-existentes (hover `2.5:1`, paddings de seção, grid do hero, stripes do rip), já documentados.

---

## Prompt 26 — Audit da página de aplicações pós-v2

### Prompt enviado

> Perfeito. Faça o audit com a avaliação e a alteração do aplicacoes.html com os novos registros, pois após esse audit, já farei o novo commit.

### Objetivo

Medir tecnicamente `aplicacoes.html` após o ciclo v2 (overdrive II, distill de calibração, remoção de `.od-scan` e do canvas full-screen) e registrar o resultado dentro da própria página antes do commit, isolando pendências reais de resíduos do Bootstrap.

### Resultado obtido

- **Score: 16/20 (Good)** — a11y 3, performance 3, responsividade 4, theming 3, integridade 3; contraste, landmarks, responsividade e tokens aprovados nas cinco dimensões.
- **Único achado:** hover Bootstrap `2.5:1` (branco sobre `#10b981`), verificado como resíduo do CSS comum — a página não tem botões e não é afetada.
- **`aplicacoes.html` alterado:** nova entrada **10 · impeccable audit** (`aplicacoes.html:162`) no formato Problema/Hipótese/Orientação/Resultado/Evidência/Decisão, registrando o 16/20 e isolando o hover como pendência; stat atualizado para **24/32 · 16/20** (`aplicacoes.html:41`).
- Detector pós-edição sem achados novos; autor confirmou o commit como próximo passo.

### Análise crítica

O audit separou o que é do projeto (saudável nas quatro dimensões que importam para a página) do que é herança do toolchain (o hover Bootstrap, falso positivo nesta página sem botões). O registro interno em Problema/Hipótese/Orientação/Resultado/Evidência/Decisão transforma o histórico de aplicações em evidência viva, no mesmo molde das demais seções. O ciclo v2 está fechado e pronto para commit; o próximo passo natural é re-auditar após resolver o hover do Bootstrap para validar o ganho de score.
