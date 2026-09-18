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
