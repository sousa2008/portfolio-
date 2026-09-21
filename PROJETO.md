# Histórico de uso do Impeccable

Este documento registra somente os comandos do Impeccable que foram realmente usados no projeto, com objetivo, resultado, evidência e decisão. O catálogo completo dos 23 comandos será apresentado em uma página complementar do portfólio, conforme a atividade.

## Estado do projeto

- **Versão preservada:** tag `v1` criada no commit original do projeto.
- **Versão em desenvolvimento:** branch `v2`, com intervenções controladas e páginas complementares da atividade.
- **Escopo atual:** documentação, diagnóstico, refinamento visual e comprovação da evolução.
- **Páginas complementares:** `catalogo.html` e `aplicacoes.html`.

## Histórico

### 1 — `impeccable init`

- **Uso:** registrar o contexto durável do produto antes de iniciar a evolução visual.
- **Resultado:** criado o [PRODUCT.md](PRODUCT.md) com plataforma, público, objetivo, posicionamento, capacidades, restrições, evidências e princípios do portfólio.
- **Evidência:** o arquivo contém o comentário `impeccable:product-schema 1` e os fatos confirmados pelo autor.
- **Decisão:** preservar HTML5, CSS3, JavaScript, Bootstrap 5 via CDN e `localStorage`; não adicionar backend ou banco de dados.

### 2 — `impeccable document`

- **Uso:** registrar o sistema visual existente antes de propor mudanças.
- **Resultado:** criado o [DESIGN.md](DESIGN.md) com cores, tipografia, layout, profundidade, formas, componentes e regras visuais observadas no código atual.
- **Evidência:** os tokens documentados correspondem principalmente às variáveis de `css/style.css`, incluindo navy, slate, verde esmeralda, Inter, raios e sombras.
- **Decisão:** tratar o design atual como referência da v1; qualquer mudança posterior deverá ser justificada pela crítica e comparada com o estado anterior.

### 3 — `impeccable critique`

- **Uso:** encontrar inconsistências de experiência, hierarquia, acessibilidade e acabamento antes de iniciar as intervenções da v2.
- **Alvo:** `index.html`, com análise complementar de `formulario.html` e `interatividade.html`.
- **Resultado:** a crítica encontrou uma base funcional e coerente, mas com excesso de funções na home, fluxo de personalização com etapa intermediária, hierarquia tipográfica pouco diferenciada no formulário e padrões visuais repetitivos.
- **Evidência visual e estrutural:** o detector apontou `side-tab`, `low-contrast`, `cramped-padding`, `overused-font`, `flat-type-hierarchy` e `dark-glow`. Também apontou valores inline de cor, raio e tamanho fora dos tokens documentados.
- **Limitação:** não havia automação de navegador disponível; a crítica foi feita por leitura do código e pelo detector CLI. Não foram produzidas sobreposições visuais no navegador.
- **Decisão:** não corrigir automaticamente. Primeiro preservar a v1; depois priorizar hierarquia e fluxo, contraste e espaçamento, e só então refinamentos visuais.

### 4 — `impeccable shape`

- **Uso:** definir a estrutura das páginas exigidas pela atividade antes de implementá-las.
- **Problema observado:** o catálogo e os registros existiam apenas em Markdown, sem uma experiência publicável e navegável.
- **Hipótese:** duas páginas editoriais, integradas ao portfólio mas com navegação própria, tornariam o estudo e as evidências mais fáceis de verificar.
- **Orientação:** preservar a identidade navy/verde, usar conteúdo real do histórico e não transformar a home em uma documentação extensa.
- **Resultado:** brief confirmado para `catalogo.html` e `aplicacoes.html`, com links no rodapé da home.
- **Decisão:** implementar as páginas na branch `v2`, mantendo a home como apresentação profissional.

### 5 — `impeccable audit`

- **Uso:** verificar acessibilidade e contraste antes de alterar o visual da v2.
- **Alvo:** `index.html`, `formulario.html` e `interatividade.html`, com foco nos controles e estados de interação.
- **Resultado:** o launcher instalado não expõe o subcomando `audit`; a auditoria foi complementada pelo detector CLI e pela inspeção direta do CSS.
- **Evidência inicial:** foram confirmados problemas de contraste em botões, placeholders pouco legíveis, ausência de um foco global consistente e uso de cores legadas nos estados de hover.
- **Intervenção realizada:** em `css/style.css`, foram criados tons `--color-accent-hover` e `--color-accent-deep`, os botões principais passaram a usar texto branco sobre fundos mais escuros, placeholders ficaram mais legíveis e foi adicionado foco visível com `:focus-visible`.
- **Validação:** o detector deixou de apontar o caso de texto escuro sobre verde dos botões principais e o caso legado de `#059669`; permanece um alerta de `#ffffff` sobre `#10b981` em uma variante/estado que precisa ser identificado no navegador, além dos avisos de `side-tab`, `dark-glow` e `cramped-padding`.
- **Decisão:** manter a composição e a paleta geral, avançando depois para espaçamento e hierarquia sem redesenho radical.

### 6 — `impeccable layout`

- **Uso:** corrigir a hierarquia espacial apontada na crítica: a home dava peso vertical semelhante a todas as seções e o detector acusava padding apertado.
- **Alvo:** `index.html` e `css/style.css`.
- **Orientação complementar:** preservar a ordem do conteúdo, a paleta navy/verde e as funcionalidades; priorizar a leitura `hero → projetos → experiência → contato` e manter hobbies/viagens como conteúdo de apoio.
- **Resultado:** projetos e contato passaram a ter mais respiro vertical; hobbies e viagens ficaram mais compactos; cards ganharam `1.5rem` de padding interno; o hero recebeu mais separação entre texto e imagem e largura máxima de leitura.
- **Evidência:** a varredura de layout continua apontando alguns `cramped-padding` genéricos, especialmente em seções, rodapés, hobbies e formulário, mas não surgiram novos alertas estruturais. A alteração foi validada com `git diff --check`.
- **Análise:** a hierarquia espacial agora comunica melhor quais regiões sustentam a avaliação profissional, sem remover seções nem alterar a composição visual geral.
- **Decisão:** manter esta intervenção e deixar os avisos restantes para uma etapa específica de refinamento de espaçamento/formulário, evitando misturar escopos.

### 7 — `impeccable typeset`

- **Uso:** criar uma hierarquia visual mais interessante e autoral, respondendo ao problema de tipografia plana apontado na crítica, sem trocar radicalmente o visual.
- **Alvo:** `index.html`, `formulario.html`, `interatividade.html` e `css/style.css`.
- **Orientação complementar:** manter Inter, navy/verde, conteúdo factual e responsividade; diferenciar nome, cargo, títulos de seção, cards, corpo e metadados por escala, peso, medida e espaçamento.
- **Resultado:** o hero passou a usar escala responsiva `clamp(2.8rem, 6vw, 4.5rem)`, tracking negativo e largura controlada; cargos ganharam tracking sem caixa alta; títulos de seção, cards e metadados passaram a ter papéis mais claros; o corpo do hero foi limitado a `44ch`.
- **Evidência:** o detector não aponta mais `all-caps-body` nem `wide-tracking` após os ajustes; permanecem advisories de tamanhos inline antigos e avisos preexistentes de fonte/hierarquia nas páginas auxiliares.
- **Análise:** a leitura agora tem uma assinatura mais pessoal no hero e uma separação mais clara entre conteúdo principal e contexto, sem adicionar outra família tipográfica ou alterar a paleta.
- **Decisão:** manter a hierarquia tipográfica e tratar os valores inline e a hierarquia específica do formulário em uma etapa própria, para não misturar escopos.

### 8 — `impeccable bolder`

- **Uso:** tornar a primeira impressão mais impactante e menos parecida com templates de portfólio, sem exagerar nem trocar a identidade visual.
- **Alvo:** hero e apresentação de projetos em `index.html`, com regras em `css/style.css`.
- **Orientação complementar:** manter navy/verde, Inter, conteúdo factual, acessibilidade e estabilidade no mobile; fazer uma única escolha visual decisiva e reduzir a competição ao redor.
- **Resultado:** o hero ganhou uma moldura fina e levemente rotacionada atrás da foto; o primeiro projeto passou a subir `1rem` em telas amplas, criando uma assimetria editorial; no mobile, o deslocamento é removido e a moldura fica mais discreta.
- **Evidência:** após a validação, o detector não acusa o padrão novo de borda superior em card arredondado; permanecem somente alertas anteriores de `side-tab`, `dark-glow`, `low-contrast` e `cramped-padding`.
- **Análise:** a página agora possui um pico visual identificável e uma composição menos intercambiável, sem adicionar fonte, cor ou efeitos novos fora do sistema existente.
- **Decisão:** manter a assimetria e a moldura; não adicionar mais ornamentos nesta etapa para preservar legibilidade e evitar excesso visual.

### 9 — `impeccable polish`

- **Uso:** fazer o acabamento final antes do próximo `critique`, removendo sinais de template, deriva visual e efeitos decorativos excessivos.
- **Alvo:** `index.html`, `formulario.html`, `interatividade.html` e `css/style.css`.
- **Orientação complementar:** preservar a identidade, o conteúdo e as funcionalidades; substituir halos por elevação neutra, remover estilos inline e manter o destaque do hero sem adicionar novos ornamentos.
- **Resultado:** estilos inline foram convertidos em classes e tokens; o ícone amarelo isolado foi alinhado ao verde do sistema; bordas laterais de 3px em timeline/experiência foram removidas; sombras coloridas foram substituídas por `shadow-sm`/`shadow-md`; os botões Bootstrap receberam estados escuros com texto branco.
- **Evidência:** `git diff --check` aprovado; a busca não encontra mais `style="`, `border-left: 3px`, `#eab308`, `font-size: 3rem`, `font-size: 2.5rem` ou `border-radius: 5px` no HTML/CSS. Permanecem apenas anéis de foco com `box-shadow: 0 0 0`, que são estados de acessibilidade, não decoração.
- **Análise:** o sistema ficou mais sóbrio e consistente, com personalidade sustentada por tipografia, composição e conteúdo, em vez de glow, barras e valores isolados.
- **Decisão:** considerar o polimento encerrado e executar o próximo `critique` para medir o resultado sem novas mudanças intermediárias.

### 10 — `impeccable critique` pós-mudanças

- **Uso:** medir o resultado acumulado de `audit`, `layout`, `typeset`, `bolder` e `polish` antes de iniciar o próximo ciclo.
- **Alvo:** `index.html`, com análise complementar de `formulario.html` e `interatividade.html`.
- **Resultado:** a pontuação subiu de `22/32` para `24/32`.
- **Evidência:** desapareceram os achados `side-tab`, `dark-glow`, `border-accent-on-rounded` e os estilos inline do HTML/CSS principal. O hero e o primeiro projeto passaram a ter mais especificidade visual.
- **Pendências:** o detector ainda aponta contraste de `2.5:1` em um estado Bootstrap, `cramped-padding` em seções/cards, hierarquia plana e heading pulado no formulário, além da etapa intermediária de personalização.
- **Análise:** as mudanças melhoraram consistência, minimalismo e autoria visual; os problemas restantes são principalmente de fluxo administrativo, formulário e estado contextual de contraste.
- **Decisão:** não fazer novas alterações nesta crítica. O próximo ciclo deve escolher entre simplificar o fluxo, corrigir o formulário ou investigar o estado Bootstrap no navegador.

### 11 — `impeccable critique` (3ª rodada)

- **Uso:** medir o estado atual após a criação das páginas complementares da v2 e confirmar se as pendências de 24/32 permanecem antes do próximo ciclo de intervengão.
- **Alvo:** `index.html`, com análise complementar de `formulario.html`, `interatividade.html`, `catalogo.html` e `aplicacoes.html`.
- **Resultado:** a pontuação manteve `24/32`, mas a análise passou a incluir a primeira leitura das páginas criadas na v2 pelo detector.
- **Evidência:** o detector apontou `low-contrast` (hover 2.5:1 — `#ffffff` sobre `#10b981`) em todas as cinco páginas, `cramped-padding` em sections/cards/hobbies/formulário, `flat-type-hierarchy` e `skipped-heading` no formulário — e, nas páginas novas, o retorno de `border-accent-on-rounded` (10 ocorrências em `aplicacoes.html`) e `wide-tracking` (11 em `catalogo.html`), exatamente os padrões que o `polish` da v1 havia removido. Permaneceram ainda `overused-font` (Inter) e advisories de raio/cor fora do DESIGN.md.
- **Análise:** a home estabilizou e não regrediu; o ruído novo concentra-se nas páginas de documentação da v2 (as evidências da atividade carregam antipadrões já eliminados), e as pendências antigas de fluxo administrativo, formulário e contraste Bootstrap continuam sem resolução. A estagnação em `24/32` indica que o próximo ganho não é estético, mas de produto e de consistência.
- **Decisão:** não corrigir automaticamente. Priorizar no próximo ciclo: separar o caminho do recrutador do caminho do administrador, tratar o formulário (hierarquia, heading, alerta com foco) e identificar a variante Bootstrap de 2.5:1 no navegador; em paralelo, aplicar às páginas complementares o mesmo rigor de `polish` usado na home.

### 12 — `impeccable distill` (reframing do fluxo de preenchimento)

- **Uso:** esclarecer a ideia criativa por trás do fluxo de preenchimento — qualquer visitante pode simular o próprio site usando este portfólio como molde (placeholder) — e remover a impressão de que o fluxo é um furo de segurança ou um editor do site publicado.
- **Problema observado:** os textos chamavam o fluxo de "preencher portfólio" e "personalizar seu próprio portfólio", sem deixar claro que a alteração é apenas uma simulação local no navegador do visitante. A página intermediária explicava o armazenamento técnico de forma defensiva ("o projeto não utiliza banco de dados; os dados ficam salvos apenas no seu navegador"), o que reforçava a suspeita de invasão em vez de comunicar a ideia criativa.
- **Hipótese:** renomear a experiência para "simular" e explicitar, no próprio fluxo, que a simulação fica salva somente no navegador e que o portfólio original do autor permanece publicado e intacto para todos os demais visitantes eliminaria a impressão de vulnerabilidade sem remover a funcionalidade.
- **Orientação complementar:** preservar a identidade navy/verde, o conteúdo factual e o fluxo em uma etapa explicativa, destilando o texto para uma única ideia clara; não remover funcionalidades, apenas reenquadrá-las.
- **Resultado:**
  - `interatividade.html` reescrita como uma página explicativa destilada: apresenta a ideia criativa (molde vivo, simulação local, original intacto, controle total) e leva ao formulário em um único CTA "Começar simulação".
  - CTAs de `index.html` renomeados para "Simular meu portfólio" (botão flutuante e CTA secundário do hero), removendo a ambiguidade de "preencher/personalizar".
  - `formulario.html` com subtítulo que comunica a natureza de simulação local e a preservação do original.
  - Novo componente "Modo demonstração" em `index.html`: quando dados personalizados estão ativos, um aviso fixo informa que a versão exibida é uma cópia salva no navegador do visitante, com ação "Ver original" que limpa os dados e restaura o portfólio padrão.
- **Evidência:** retextos verificáveis nas páginas; o aviso de modo demonstração criado em `css/style.css` (`.demo-mode-flag`) usa apenas os tokens do sistema (navy, slate, verde esmeralda, raios existentes) e o handler `demoModeRestore` em `js/script.js` limpa `localStorage` e recarrega a página.
- **Análise:** o fluxo agora comunica a intenção criativa antes da ação e fecha o ciclo de interpretação no momento em que o visitante vê os próprios dados aplicados na home: a versão exibida é sempre rotulada como uma simulação local, e o caminho de volta ao original é explícito. A palavra "simular" transmite que nada na versão publicada é alterado, corrigindo a leitura de "furo de segurança" mantendo toda a funcionalidade anterior.
- **Decisão:** manter a etapa explicativa destilada e o aviso de modo demonstração; o fluxo passa a tratar qualquer visitante como potencial experimentador, com o autor como primeiro usuário desse mesmo fluxo. Próximos ciclos podem abordar hierarquia do formulário e contraste Bootstrap, agora isolados do problema conceitual.

### 13 — `impeccable clarify` (copy do fluxo de simulação)

- **Uso:** afinar os textos do fluxo `index.html → interatividade.html → formulario.html → index.html` depois do `distill`, removendo ambiguidades, repetições e consequências não anunciadas da própria interface.
- **Alvo:** `formulario.html`, `js/form.js`, `index.html` e `interatividade.html` (sem mudanças, já estava claro).
- **Resultado:**
  - `formulario.html` com subtítulo que diz o que acontece ("veja o layout com as suas informações... salvo apenas neste navegador; a versão original permanece publicada") e legenda "Campos marcados com * são obrigatórios" (o `*` não era explicado).
  - Alerta de campos faltantes mais direto, sem o "acima" enganoso, apontando para os campos listados.
  - Confirmação destrutiva trocada por modal Bootstrap com ação nomeada "Apagar e voltar ao original" e consequência explícita ("esta ação não pode ser desfeita"), em vez do `confirm()` genérico.
  - Labels ajustados: "Foto Sobre Mim" → "Foto — Sobre Mim"; jargão "Ícone (Bootstrap Icons)" → "Ícone".
  - `js/form.js`: botões remover (X) com `aria-label` nomeado por item; modo edição com título e botão coerentes ("Editar Portfólio"/"Atualizar Portfólio"); `clearAllFields()` sem `confirm()`, fluxo via modal.
  - `index.html`: correção de grafia "con historia" → "com história"; nota honesta sob o botão de contato informando que o formulário abre o aplicativo de e-mail (consequência real do `mailto`).
- **Evidência:** alterações verificáveis nos arquivos; sintaxe JS validada com `node --check`; nenhum novo achado no detector.
- **Análise:** o texto agora anuncia consequências reais (salvamento local, envio via e-mail, apagamento irreversível) em vez de escondê-las, e as ações de interface refletem o estado em que estão (editar/atualizar, apagar/voltar). A etapa intermediária não repetia mais a saudação nem a explicação técnica.
- **Decisão:** manter as novas cópias e o modal destrutivo; o fluxo fica distribuído entre `index`, `interatividade` e `formulario` em uma narrativa única de simulação. Mantém-se para os próximos ciclos: hierarquia do formulário (`typeset`), padding (`layout`), robustez (`harden`) e contraste Bootstrap (`audit`).

### 14 — `impeccable typeset` (sistema tipográfico autoral, anti-slop)

- **Uso:** criar uma hierarquia visual de verdade que traga a aparência de inovação e criatividade proposta pelo projeto desde a sua criação, removendo qualquer cara de "slop de IA" e afastando a tipografia do visual de template.
- **Alvo:** as cinco páginas (`index`, `formulario`, `interatividade`, `catalogo`, `aplicacoes`) e `css/style.css`, com atualização do [DESIGN.md](DESIGN.md).
- **Resultado:**
  - Fonte trocada: saiu a Inter (grande sinal de template, marcada pelo detector como `overused-font` em todas as páginas). Entrou **Onest** para corpo e UI e **Spectral** (serifa autoral) para nome, títulos editoriais e destaque; a combinação serifa + grotesca foi mantida como direção editorial.
  - Hierarquia real em escala distinta: display → headline XL/base/SM → title → body → label → meta, com o nome em serifa de destaque e as support sections menores por decisão.
  - Formulário e `interatividade.html`: hierarquia plana corrigida (h1 de página cresceu, não era mais `1.5rem`) e o heading pulado (h1→h3) do alerta de campos faltantes foi resolvido.
  - Medidas e leitura: textos limitados a 56–60ch, entrelinha e tracking ajustados para o fundo escuro, campos de formulário em `1rem` (evita o zoom automático do iOS).
  - Mobile: o override antigo que travava o hero em `1.5rem` no celular foi removido; a rampa fluida `clamp` agora manda; cargo em caixa baixa com tracking moderado.
  - Craft floor: "eyebrows" removidos das páginas de documentação, sublinhado verde do `.section-title` (visual de template) removido, inline style de `js/script.js` convertido, e selection/caret/scrollbar receberam o tema do sistema.
- **Evidência:** escaneamento `--scope type` 100% limpo (`[]`); Google Fonts carregando Onest + Spectral nas cinco páginas; tokens `--font-family` (`Onest`) e `--font-display` (`Spectral`) em `css/style.css`; DESIGN.md atualizado com a nova rampa tipográfica. Limitacão: não foi possível inspecionar os screenshots renderizados, a validação visual foi feita por escaneamento mecânico e inspeção de fonte.
- **Análise:** a serifa no nome e nos títulos editoriais dá autoria e um pico visual legível, enquanto o grotesco mantém a leitura profissional do corpo. A Inter era o maior vetor de "cara de AI"; sem ela, e com a rampa escalonada, o portfólio deixou de parecer um template intercambiável.
- **Decisão:** manter Onest + Spectral e a nova rampa como sistema da v2; pendências seguintes do backlog (contraste Bootstrap `2.5:1`, `cramped-padding`, bordas das páginas de documentação) ficam para seus respectivos ciclos, sem misturar escopo.

### 15 — `impeccable layout` (respiro, leitura e pontos do formulário)

- **Uso:** tornar o layout mais atrativo e agradável de visualizar, resolvendo também os pontos já mapeados do formulário (alerta, campos e compactação).
- **Alvo:** `css/style.css`, `formulario.html` e ajustes de tipografia finos, com atualização do [DESIGN.md](DESIGN.md) nos inputs/controles.
- **Resultado:**
  - Alerta de campos faltantes com texto em âmbar explícito (`#missingFieldsAlert p`), eliminando a leitura `4.4:1` de texto muted sobre fundo âmbar translúcido.
  - `wide-tracking` em texto de corpo corrigido (`.experience-item h4` de `0.04em` → `0.035em`) e hierarquia plana eliminada (card-title `1.1rem` → `1.13rem`; degrau body→h3 agora em `1.25:1`).
  - Campos do formulário com texto digitado em slate claro (`#e2e8f0`) e `color-scheme: dark` em `body` e controles, padronizando widgets nativos (calendar, autocomplete, etc.) com o tema.
  - Respiro e compactação dos cards/seções revisados conforme o escopo do `layout`.
- **Evidência:** `node --check` OK em `js/form.js` e `js/script.js`; CSS com 275/275 chaves balanceadas; varredura `--scope layout` com apenas 5 avisos de `section-padding`, explicados como falso positivo (seções full-bleed usando `.container`, já documentado); o antigo achado de hover `2.5:1` foi diagnosticado como artefato do detector — os tokens `--color-accent-hover/deep` são resolvidos como `#10b981` pela heurística, mas na cascata real todo hover usa `#047857`/`#065f46` (≥`5.8:1` com branco). DESIGN.md atualizado (Inputs/Fields).
- **Análise:** os controles do formulário agora conversam com o fundo escuro (slate claro ao digitar, widgets nativos escuros) e o alerta de campos pendentes ficou legível sobre o próprio fundo âmbar. A tipografia fina eliminou os dois últimos avisos de rampa plana e tracking largo na home.
- **Decisão:** considerar a rodada de layout encerrada com verificação limpa do ponto de vista estrutural. O diagnóstico do hover Bootstrap indica que, se confirmado no navegador, o achado `2.5:1` da crítica é heurístico e não uma superfície real; permanece como verificação visual num ciclo `live`/`audit` final, sem prioridade de código.

### 16 — `impeccable harden` (robustez de segurança, storage e acessibilidade)

- **Uso:** endurecer o fluxo de simulação contra URLs/tamanhos/erros de armazenamento e falhas não anunciadas, fechando o backlog de robustez do formulário.
- **Alvo:** `js/script.js`, `js/form.js`, `css/style.css`, `formulario.html` e `index.html`.
- **Resultado:**
  - Wrappers seguros de `localStorage` (`storageGet`/`storageRemove`), `safeUrl` (só `http`/`https`; rejeita `javascript:` e protocolo relativo), `safeEmail` (remove caracteres de injeção) e `cleanWhatsApp` (só dígitos; link só com ≥10 dígitos).
  - Links de herói/sobre/contato/rodapé sanitizados; imagens injetadas com `loading="lazy" decoding="async"`; fallback de foto sem `src` quebrado.
  - Salvamento em `js/form.js` com `try/catch`: imagem >1,5 MB bloqueada com mensagem clara, pré-checagem de tamanho do JSON (~4 MB) antes do `setItem`, quota/erro de storage tratados com restauração do botão; botão desabilitado **antes** da leitura assíncrona (fim do duplo-submit) e reabilitado em qualquer erro.
  - Revalidação de campos obrigatórios por delegação (cobre grupos dinâmicos); `FileReader` com erro tratado; alerta `aria-live` `#saveErrorAlert`.
  - CSS: `overflow-wrap: break-word` no `body` + `max-width: 100%` em controles; `overflow-wrap: anywhere` em hero/cards/timeline/badges/docs/demo-flag; `text-wrap: balance` no título do hero; `.skill-tags` flex com `min-width: 0`; `prefers-reduced-motion` estendido (scroll `auto`, fade-in resolvido).
  - HTML: `maxlength` + `inputmode` (`email`/`tel`/`url`) nos campos; foto "Sobre" com lazy.
- **Evidência:** `node --check` OK nos dois JS; helpers testados (URLs `javascript:`/relativas/protocol-relative rejeitadas, e-mail sanitizado, WhatsApp normalizado); detector sem falha nova (os 8 avisos restantes são pré-existentes e já documentados).
- **Análise:** entradas externas (URLs, e-mail, WhatsApp, imagens base64) agora não conseguem injetar `javascript:` nem quebrar o layout; a gravação com pré-checagem de tamanho transforma a exceção de quota num aviso claro em vez de falha silenciosa; o duplo envio foi eliminado na raiz e o usuário de teclado/vestibular passa a ter anúncio e foco dirigido ao problema.
- **Decisão:** manter a camada de hardening. Com os três ciclos (distill/clarify → typeset/layout → harden) fechados, o próximo passo é o acabamento final (`polish`) nas páginas de documentação e depois a medição do ciclo (`critique`), seguido de `extract`, `adapt` e `optimize`.

### 17 — `impeccable polish` (acabamento + correção do fallback de imagem no mobile)

- **Uso:** fazer o acabamento das questões avaliadas como necessárias e corrigir o bug em que, na versão mobile, a mensagem "Sem imagem selecionada" aparecia por trás da foto.
- **Alvo:** `css/style.css`, `js/script.js` e estado vazio de imagens em herói, Sobre, Projetos e Viagens.
- **Problema observado:** o `<span class="img-fallback">Sem imagem selecionada</span>` ficava sempre renderizado em `inset: 0` sob a foto; como a foto de perfil é um PNG sem fundo (transparente), o texto aparecia atravessando a imagem no mobile.
- **Resultado:**
  - O fallback passou a existir apenas no estado `.no-image`: oculto (`display: none`) enquanto há imagem, com `display: flex` somente quando não há imagem em `css/style.css:155-172`.
  - Cor do fallback do hero elevada de `rgba(148,163,184,0.5)` (~`2.7:1`) para `--color-text-muted` sólido (~`7:1`).
  - Removido o cap global `img { max-width: 90% }` que causava margem interna assimétrica nas fotos; agora `100%`.
  - `js/script.js` (linhas 164 e 226): cards de projeto/viagem sem imagem recebem `no-image`, garantindo que o estado vazio ainda exibirá a mensagem.
- **Evidência:** verificação via DevTools Protocol — as imagens carregam, o fallback fica `display: none` no herói/Sobre e `flex` apenas no estado vazio; contraste e texto corretos; sem erros de console/JS. Capturas salvas em `Temp/opencode/final-mobile.png` e `Temp/opencode/final-desktop.png` (não inspecionáveis por este modelo).
- **Análise:** o problema era o fallback sempre ativo sob a foto transparente — corrigi-lo em todos os quatro lugares (herói, Sobre, Projetos e Viagens) elimina a duplicação e mantém a mensagem útil apenas quando realmente não há imagem. O contraste do fallback no herói também estava abaixo do AA e foi corrigido junto.
- **Decisão:** manter o estado `.no-image` como único gatilho do fallback. Com `distill`→`clarify`→`typeset`→`layout`→`harden`→`polish` fechados, o ciclo está pronto para a medição por `critique`.

### 18 — `impeccable critique` (4ª rodada, pós-ciclo v2)

- **Uso:** medir o resultado acumulado do ciclo da v2 (`distill`, `clarify`, `typeset`, `layout`, `harden`, `polish`) e reavaliar as pendências com a decisão do autor de manter a simulação como vitrine.
- **Resultado:** a pontuação subiu de `24/32` para `25/32`.
- **Permanências:** o CTA de simulação no hero é intencional (vitrine criativa, não ruído) — o autor confirmou manter a funcionalidade como demonstração; logo, o ajuste de fluxo passou a ser de redundância, não de remoção do destaque.
- **Achados restantes:** redundância entre o botão flutuante `#btnEditar` e o CTA do hero; bloco de ~90 linhas de `!important` no CSS dos botões (estado contextual `2.5:1` nas cinco páginas); semântica de cores dos badges afastada dos tokens (verde usado para tudo, azul documentado e violeta ausentes; `#60a5fa`, `#fca5a5` e `8px` fora do DESIGN.md); CSS morto (`.btn-preencher`, `.social-icons`, `.hero-links`, `--shadow-accent`); `docs/projeto.md` desatualizado.
- **Fora do escopo atual:** disclosure do formulário e a navegação com 9 destinos (P3).
- **Decisão:** priorizar no próximo ciclo: `distill` (remover redundância do botão flutuante e reequilibrar pesos do hero com "Baixar Currículo" dominante), `audit`+`harden` (tokenizar estados dos botões e aposentar o bloco `!important`), `colorize`+`extract` (restaurar semântica dos badges e documentar as cores novas) e `polish` final (CSS morto + sincronização de docs). Rodar novo `critique` depois dos fixes para medir a subida.

### 19 — `impeccable distill` (remoção do botão flutuante + reequilíbrio do hero)

- **Uso:** executar o primeiro item do plano pós-crítica 4: remover a redundância de CTAs apontada(d) pelo detector — o botão flutuante `#btnEditar` como terceira porta para a simulação no mesmo viewport — e reequilibrar o hero para dar dominância visual à ação de evidência.
- **Alvo:** `index.html`, `js/script.js` e `css/style.css`.
- **Resultado:**
  - `#btnEditar` removido de `index.html` (elemento) e de `js/script.js` (refs das linhas 272 e 285; o ramo `else` órfão da inicialização foi eliminado); regras mortas `.btn-editar` e `.interactive-page .btn-editar` removidas de `css/style.css`.
  - `.btn-primary-cta` virou a ação única dominante: verde sólido, peso 700, `1.05rem`, padding maior e sombra.
  - `.btn-secondary-cta` virou vitrine secundária explícita: link sutil com ícone esmeralda e underline discreto (peso 600, `0.95rem`, sem borda de botão).
  - Overrides responsivos (768px/576px) reescritos para manter a hierarquia: primário em largura total, secundário como link alinhado à esquerda.
- **Evidência:** `node --check` aprovado; zero referências órfãs a `btnEditar` no código (restam apenas menções históricas em `PROJETO.md`/`docs/`); `docs/documentacao.md` atualizado. Limitação: sem navegador no ambiente, a validação foi estática (sem inspeção por screenshot).
- **Análise:** o primeiro viewport deixou de oferecer três portas para a mesma ação; o recrutador agora encontra uma única ação primária (currículo) e a simulação fica como vitrine secundária perceptível, mas sem competir pelo clique. A remoção das refs órfãs e das regras CSS mortas do botão fecham o ciclo sem deixar vestígios.
- **Decisão:** manter o novo equilíbrio do hero. Próximos passos do plano: `audit`+`harden` para tokenizar os estados dos botões (aposentar o bloco `!important` e o estado `2.5:1`) e depois `colorize`+`extract` para a semântica dos badges.

### 20 — `impeccable audit` (auditoria técnica completa)

- **Uso:** executar o diagnóstico estruturado do plano pós-crítica 4 — tokenizar estados dos botões, aposentar o bloco `!important` e eliminar o contraste `2.5:1` — com verificação WCAG 2.1 por cálculo.
- **Resultado:** Audit Health Score **12/20 — Acceptable**; detector sem achados automáticos; nenhum P0, 3 P1 e 3 P2.
- **Achados (P1):**
  1. **Estados de botão fora do modelo de tokens** — sem `:active`/`:focus`/`:disabled`; hover reinventado em cada classe; nomenclatura invertida (repouso usa `--color-accent-hover`, hover usa `--color-accent-deep`); outline do Bootstrap herdam paleta azul fora do sistema (`#0d6efd` 3.97:1; `btn-outline-dark` **1.16:1**, praticamente invisível no navy).
  2. **Bloco `!important` de ~150 linhas** em `css/style.css` («CORREÇÕES DE CONTRASTE PARA DARK MODE») com 52 usos — o theming do Bootstrap foi feito por remendo, criando dívida estrutural.
  3. **`2.54:1` branco sobre `#10b981`** no token `button-primary` do DESIGN.md — reprova WCAG AA; o CSS atual "escapa" porque o repouso usa `#047857`, mas qualquer uso futuro do token reproduz o problema.
- **Achados (P2):** footer `4.09:1` (texto `0.85rem`, `rgba(148,163,184,0.7)`); `btn-outline-primary` `3.97:1` fora da paleta; defaults do Bootstrap não tematizados.
- **Positivos confirmados:** `lang=pt-BR`, skip-link, `aria-label`s, labels, alt text e `prefers-reduced-motion`; corpo de texto forte (`#94a3b8` 6.96:1 e `#e2e8f0` 14.5:1); tokens reais em `:root`; responsivo sólido (breakpoints 991/768/576, alvos ≥44px no mobile).
- **Recomendação:** `extract` para criar os tokens de estado de botão na família `#047857`/`#065f46` e mapear os `btn-*` do Bootstrap; depois `polish` para fechar os contrastes restantes (footer, outlines) e o DESIGN.md.
- **Decisão:** auditoria confirma que a identidade navy/verde está preservada e que as falhas são pontuais de sistema, não de identidade. Executar `extract` (tokens de estado) + `harden` (aplicação) e, em fechamento, `polish`; re-auditar em seguida para medir a subida do score.

### 21 — `impeccable overdrive` (Cidade-Código: o portfólio como sistema vivo)

- **Uso:** transformar a apresentação em um portfólio vivo, onde o usuário se sinta dentro de uma experiência — a primeira impressão vira um sistema que liga, reconhece, carrega e responde, mantendo a identidade navy/verde e a proposta de inovação/criatividade.
- **Contexto:** esta execução continuou o processo interrompido na sexta-feira (desligamento do PC) — a sessão anterior morreu no início do `overdrive`; o trabalho foi refeito em sessão nova sobre o estado atual do repositório.
- **Resultado (camada dinâmica "Cidade-Código", só na home):**
  - **Boot de terminal:** overlay que abre a sessão uma vez ("cidade-código · sistema online"), com barra de progresso e dica "clique, tecle ou role para pular".
  - **Nome desmontável:** o nome do hero é coberto por um overlay fantasma (`od-ghost`, `aria-hidden`) que se desintegra letra a letra (rotação, deriva e cascata) conforme o hero sai do viewport; o título real fica intacto.
  - **Trilho-sinal:** linha de energia vertical na borda esquerda no canvas de partículas, que sobe com o scroll, cometas e um nó por seção; o módulo ativo pulsa e os demais acendem ao serem energizados.
  - **Títulos que entram online:** revelação letra a letra com atraso escalonado e traço sublinhado crescendo da esquerda.
  - **Linha de vida da formação:** timeline carrega como um circuito conforme a seção entra na tela.
  - **Hero como planta urbana:** grade de blueprint sutil + retrato holográfico que acompanha o cursor (desktop) sobre a lâmpada existente.
  - **Telemetria desktop:** chip fixo "INÍCIO · 0% … CONTATO · 100%" atualizado em tempo real.
- **Evidência:** novos arquivos `js/overdrive.js` e `css/overdrive.css` (zero dependências novas, HTML/CSS/JS/Bootstrap 5); `node --check` OK; headless Edge bootou sem erro com ghost, 115 caracteres de títulos, charge e telemetria construídos; detector sem flags novos da camada (glow com offset, dot decorativo removido); tokens novos em DESIGN.md (`accent-bright` `#34d399`, mono `terminal`/`telemetry`, componentes `telemetry`/`charge-line`/`progress-rail`/`boot-window`).
- **Análise:** a camada transforma o scroll numa jornada ("sistema que energiza módulos") sem trocar identidade nem adicionar dependências; `prefers-reduced-motion` desliga boot, partículas, desmontagem e tilt, mantendo a página funcional. O overlay do nome não toca o layout (kerning perfeito preservado). Nada foi commitado.
- **Decisão:** manter a camada "Cidade-Código" como assinatura da primeira impressão; assegurar nos próximos ciclos que `critique`/`audit` meçam a camada nova sem penalizar `prefers-reduced-motion`; retomar o `extract`+`harden` final (tokens de estado de botão e `!important`) ainda pendente do ciclo anterior.

### 22 — `impeccable distill` (suavização do overdrive)

- **Uso:** refinar a camada "Cidade-Código" após feedback do autor — suavizar o campo de partículas fora do hero (efeito de cursor exagerado) e remover a barra de conclusão do canto esquerdo (redundante com a telemetria), sem tocar na animação de entrada (boot) nem no hero.
- **Alvo:** `js/overdrive.js` e `css/overdrive.css`.
- **Resultado:**
  - Cursor (campo de partículas, fora do hero): raio de repulsão `130→90px`, força `0.16→0.05`, acoplamento ao scroll lateral `0.4→0.12` e linhas de constelação com distância `85→64px` e opacidade `0.22→0.12`.
  - Barra de conclusão do canto esquerdo (trilho-sinal com nós de seção, carga energizada e cometas — `drawRailShadow`) totalmente removida; a barra fina do topo da navbar e a telemetria continuam como os portadores do sinal de progresso.
- **Evidência:** sintaxe JS OK; teste via CDP (DOM/JS) sem erro de runtime; telemetria segue atualizando (`Projetos · 42%`) e a barra de progresso da navbar continua funcional. Limitação: validação via CDP, sem inspeção visual por screenshot.
- **Análise:** o balanço de informação no viewport ficou menos ruidoso — o progresso passa a ter um único portador duplicado (navbar + telemetria) em vez de três (navbar + telemetria + trilho-esquerdo). A repulsão mais leve devolve o protagonismo ao conteúdo, mantendo a sensação de sistema vivo que o boot e o hero constroem.
- **Decisão:** manter o hero e a entrada intocados, como pedido; considerar a calibração do overdrive encerrada e retomar o `extract`+`harden` final dos tokens de botão, pendente há dois ciclos.

### 23 — `impeccable extract` (tokens de estado + migração dos utilitários)

- **Uso:** fechar o plano definido na auditoria (item 20) — extrair os tokens de estado de botão na família `#047857`/`#065f46`, mapear os `btn-*` do Bootstrap, restaurar a semântica cromática dos badges, aposentar o bloco `!important`, remover o CSS morto e sincronizar o `DESIGN.md` e os docs.
- **Alvo:** `css/style.css`, `css/overdrive.css`, `js/script.js`, `js/form.js`, `js/overdrive.js`, `index.html`, `formulario.html`, `DESIGN.md`, `docs/documentacao.md`.
- **Resultado:**
  - **Tokens reorganizados em `:root`:** primitivas de canal RGB (`--color-*-rgb`), semântica (superfícies, texto, acento, estado), superfícies de componente (`--surface-border`, `--surface-border-strong`), botões (`--btn-bg`, `--btn-bg-hover`, `--btn-bg-active`, `--btn-fg`, `--btn-radius`), foco (`--focus-ring`, `--focus-outline`), tipografia e `--font-mono` promovido do overdrive, espaçamento (`--space-section`, `--space-section-feature`, `--space-section-support`), raio (`--radius-xs`, `--radius-sm`, `--radius`, `--btn-radius`) e movimento (`--ease-out-expo`, `--ease-standard`).
  - **Bloco «CORREÇÕES DE CONTRASTE PARA DARK MODE» removido:** os 52 usos de `!important` foram substituídos por variáveis nativas do Bootstrap 5.3 — `--bs-btn-*` (botões e estados), `--bs-alert-*` (alertas de faltantes/erro), `--bs-card-border-color`/`--bs-card-cap-bg` (cards) e `--bs-navbar-*` (navbar e links).
  - **Badges por token:** `.badge-accent` (verde), `.badge-info` (azul claro `#60a5fa`) e `.badge-tertiary` (violeta `#a78bfa`) restauram a semântica — Soft Skills deixam de repetir o verde de linguagens e ferramentas.
  - **Utilitários próprios no lugar dos do Bootstrap:** `.text-accent`, `.text-soft`, `.text-info-soft`, `.text-tertiary`, `.text-on-dark`; `index.html`, `formulario.html`, `js/script.js` e `js/form.js` migrados (badges, ícones, metadados e links sociais).
  - **Tokens novos:** `--color-accent-active`, `--color-accent-sky`, `--color-accent-teal` (faíscas do overdrive), `--color-tertiary`, `--color-info-soft`, `--color-error-soft`, `--color-bg-light-rgb`; **removidos os órfãos** `--color-primary*`, `--color-navy*`, `--color-surface`, `--color-success*`, `--color-info`, `--color-info-rgb`, `--color-text`, `--shadow-accent`.
  - **Overdrive tokenizado:** `css/overdrive.css` sem hex cru, com gradientes nos tokens de acento e `--ease-out-expo`; `js/overdrive.js` lê cores e easing por `getComputedStyle` (helper `cssVar`), eliminando `#10b981`, `#34d399`, `#7dd3fc`, `#5eead4` e o `cubic-bezier` duplicado no JS. O `display:none` do boot em `prefers-reduced-motion` deixou de precisar de `!important`.
  - **CSS morto removido:** `.btn-preencher`, `.social-icons`, regras de `.hero-links` (markup e ref órfã em `js/script.js`), `.hero-section .lead`; `p-4`/`me-3` retirados do markup e incorporados às classes de componente (`.experience-item`, `.btn-finalizar`).
  - **DESIGN.md sincronizado:** rampa de acento (`--color-accent-hover/deep/active`), cores antes fora da doc (`#60a5fa`, `#fca5a5`, `#a78bfa`, `#7dd3fc`, `#5eead4`), raios `4/6/8/10`, `button-primary` corrigido para `#047857` (fim do par `2.54:1`), chips e navbar documentados por token, família mono atribuída à camada overdrive.
- **Evidência:** `node --check` OK nos três JS; chaves CSS balanceadas; varredura de `var()` sem tokens indefinidos (restam apenas `--od-sx/--od-sy/--od-delay/--td`, definidos em runtime); zero `!important` em `style.css`; referência órfã a `var(--color-surface)` corrigida para `--color-bg-light`; nenhum hex cru no `overdrive.js`.
- **Análise:** a dívida estrutural do `!important` foi resolvida na raiz e não por remendo — cada família de componente agora fala a linguagem de variáveis do Bootstrap, e os valores de estado vivem em um único lugar (`--btn-*`). A semântica dos badges voltou a informar (verde = técnico, azul = ferramenta/competência, violeta = soft skill), eliminando o verde onipresente. A extração também cortou tokens mortos, então o `:root` passou a descrever apenas o que o código usa — condição para a próxima medição ser honesta.
- **Decisão:** manter o modelo de tokens e a migração integral. Próximos no plano: `polish` (contrastes restantes de footer/outlines e sincronização de `docs/projeto.md`) e, em seguida, `critique`/`audit` para medir a subida a partir de `25/32` e `12/20`.

### 24 — `impeccable polish` (fechamento de contrastes e acabamento pós-extract)

- **Uso:** executar a passada final do plano definido na auditoria (item 20), fechando os contrastes restantes do `audit` (footer e outlines) e eliminando o último aviso real do detector.
- **Alvo:** `css/style.css`, `css/overdrive.css`, `index.html`, `js/script.js`, `DESIGN.md` e docs do projeto.
- **Resultado:**
  - **`dark-glow` eliminado** — o último warning real do detector: brilhos cromáticos neutralizados em `.od-charge` e `.od-progress span` (`overdrive.css`); o halo do `.timeline-dot` virou anel definido de 1px + sombra neutra com offset (`style.css`).
  - **Contraste AA real:** `.btn-outline-danger` hover/ativo `#ef4444`→`#dc2626` (branco `4.85:1`) e `.btn-outline-secondary` ativo `#3b82f6`→`#2563eb` (`5.2:1`); novo token `--color-error-deep` em `style.css` e DESIGN.md.
  - **Firefox scrollbar:** `scrollbar-color`/`scrollbar-width` adicionados em `style.css` (alinha o Firefox aos demais navegadores).
  - **`index.html`:** indentação do fechamento do hero corrigida (`</div>` solto na coluna 0).
  - **Consistência de estado:** os links sociais renderizados no demo mode passam a usar a classe `.social-link` (círculos), igual ao estado estático.
  - **Docs:** DESIGN.md com a linha de danger e o token novo; `docs/projeto.md` já refletia a paleta verde (pendência do azul marcada como resolvida).
- **Evidência:** detector final com exit 0 e sem novidades — o `#ffffff` sobre `#10b981` (2.5:1) persiste mas foi comprovado como falso positivo via `CSS.forcePseudoState` (49 elementos, 0 matches; nenhuma regra casa o par em estado real); `cramped-padding` ×5 é heurística que lê `.container` centralizado por margem como "sem inset"; advisories `thin-border+shadow` (janela de boot, documentada no DESIGN.md) e `grid-background` (planta urbana do hero) são intencionais. `node --check` limpo.
- **Análise:** o único aviso factual do detector (glow) desapareceu; os pixels que restam são interpretações da heurística sobre decisões intencionais (grid do hero, janela de boot) ou falsos positivos (2.5:1 e padding) já diagnosticados. O estado dos botões de perigo/variante secundária agora passa AA de fato, e o Firefox fica consistente com Chrome/Edge no scroll.
- **Decisão:** considerá-lo encerrado para a medida do ciclo. Próximo passo: `critique` (medir a home com a camada "Cidade-Código" ativa e os tokens novos) e/ou `audit` (recalcular as dimensões em 12/20) para registrar a subida.

### 25 — `impeccable critique` (5ª rodada, pos-overdrive)

- **Uso:** medir o projeto com a camada "Cidade-Código" ativa e o ciclo extract/polish fechado, incluindo a primeira leitura do mundo animado pelo critério da crítica.
- **Método:** degradado — revisão (A) e detector+headless (B) no mesmo contexto, sem leitura de screenshots (capturados em `.impeccable/review/` para o ciclo `live`); a inspeção visual foi por fonte + DOM serializado.
- **Resultado:** a pontuação subiu de `25/32` para **26/32** (Good, ~81%).
- **Evidência:** 12 achados do detector: 5× `low-contrast` 2.5:1 (falso positivo já comprovado por `CSS.forcePseudoState`, mas sem re-verificação de navegador), 5× `cramped-padding` (falso positivo do `.container`), e os **novos** `codex-grid-background` (planta urbana do hero) e `gpt-thin-border-wide-shadow` (janela de boot) — exatamente as assinaturas genéricas de "portfólio de dev" que o projeto combate. Resolvidos desde a 4ª rodada: advisories de raio e de cor fora do DESIGN.md. Headless: ghost construído, 115 caracteres de títulos fatiados, telemetria presente, `#odBoot` removido após a sequência (boot exit limpo); `node --check` OK.
- **Pendências priorizadas (com respostas do autor):**
  1. **Boot em tela cheia como primeira impressão (P1):** ~2,4 s de digitação antes do conteúdo; calibrar para <1 s, faixa fina ou gesto transferido ao hero — `distill`.
  2. **Três "momentos sistema" competindo na dobra (P1):** boot + partículas/planta urbana + telemetria + ghost; eleger um pilar (nome em cacos + lâmpada) e rebaixar o resto, trocando o grid de hairlines por algo próprio — `overdrive` (refino).
  3. **Hover 2.5:1 (P2):** pinar no navegador real e, confirmado o falso positivo, registrar em `.impeccable/critique/ignore.md` — `live`/`audit`.
  4. **Progresso sem equivalente para leitor de tela (P2):** adicionar `aria-current` ao link ativo da nav (`js/script.js:312`) — `harden`/`audit`.
  5. **Carga cognitiva (P3):** 9 destinos de nav + 2 CTAs + decisão de "pular" o boot.
- **Análise:** o maior salto não é visual, é de sistema — o projeto parou de dever tokens e documentação, e é isso que faz os advisories de cor/raio sumirem e o overdrive parecer sistema, não remendo. A autoria se aprofundou (nome em cacos, lâmpada, linha de vida, telemetria de módulo), mas três dos recursos mais vistosos são os clichês que o detector reconhece como UI gerada; a personalização está na cópia e no acoplamento, não na técnica.
- **Decisão:** atacar na ordem confirmada pelo autor — `distill` no boot e na dobra, `overdrive` (refino) na planta urbana, pin do `2.5:1` no navegador com `ignore.md`, e `polish` de fechamento.

### 26 — `impeccable distill` (primeira dobra calibrada)

- **Uso:** executar o fix 1 do plano pós-crítica 5 — escolher um pilar visual na primeira dobra (nome em cacos + lâmpada) e rebaixar os clichês de "portfólio de dev" que o detector reconhece (boot full-screen), sem abandonar a assinatura "Cidade-Código".
- **Alvo:** `index.html`, `js/overdrive.js`, `css/overdrive.css`, `DESIGN.md`.
- **Resultado:**
  - **Boot full-screen → faixa fina no topo:** a janela central (~2,4 s de digitação, 4 linhas, borda 1px + `0 24px 48px`) virou uma faixa fina de ~0,5 s com 2 linhas destiladas (`inicializando portfólio...` / `cidade-código · sistema online`), barra de progresso abreviada e exit em slide-up. O conteúdo da primeira dobra fica visível de imediato; o diálogo não exige mais decidir "pular?".
  - **Partículas rebaixadas:** a constelação de linhas entre pontos foi removida e a densidade/alfa reduzidos (dosagem ambiente, não "rede de sistema"); menos desenho por frame alivia CPU.
  - **Telemetria em disclosure progressiva:** a cápsula desktop só aparece quando o hero sai do viewport (`scrollY > 85%` do hero); a dobra inicial fica limpa e o "sistema" se revela no scroll.
  - **Advisory `gpt-thin-border-wide-shadow` eliminado** (a janela com 1px borda + blur foi aposentada); a sombra `0 24px 48px`, fora do vocabulário documentado, saiu do código.
  - **`codex-grid-background` (planta urbana) preservado**, com a sombra resolvida pela própria reformulação do boot — a troca do grid fica para o `overdrive` (refino) do plano.
- **Evidência:** `node --check` OK em `js/overdrive.js`; DOM headless com `#odBoot` removido após a sequência curta, telemetria oculta em `scrollY = 0` e visível após o scroll; detector sem o `gpt-thin-border-wide-shadow` (restam `codex-grid-background` intencional e os falsos positivos 2.5:1/cramped-padding).
- **Análise:** o que o critique chamou de "brinquedo de dev" era o formato, não a assinatura — o gesto de terminal agora é borda de status, proporcional ao sistema que o DESIGN.md já declara. Reduzir o campo de partículas e esconder a telemetria na dobra devolve a hierarquia ao que o recrutador veio ver, sem eliminar nenhum recurso documentado.
- **Decisão:** considerar a primeira dobra calibrada; manter a planta urbana em grid para o próximo `overdrive` (refino) e o `live`/`audit` para o pin do `2.5:1` no navegador.

### 27 — `impeccable overdrive` (refino — "A cidade acorda")

- **Uso:** executar o fix 2 do plano pós-crítica 5 — substituir a planta urbana em grid (`codex-grid-background`, a assinatura genérica que o detector reconhece) por um padrão "Cidade-Código" próprio, mantendo `prefers-reduced-motion` e a degradação graciosa.
- **Alvo:** `index.html`, `js/overdrive.js`, `css/overdrive.css` e DESIGN.md.
- **Resultado (energia compartilhada dirigida pelo scroll no canvas existente):**
  - **Onda de energia da cidade:** uma maré de linhas-andar acende de cima a baixo conforme o scroll (`drawCity(cwu, scrollVel, t)` em `js/overdrive.js:420`), com janelas cintilantes e brilho residual; dorme em `scrollY=0` (83px litos) e desperta ao descer.
  - **Varredura do hero:** linha de luz que desce lentamente pela primeira dobra (`css/overdrive.css`).
  - **Dissolução do retrato (`od-rip`):** ao sair do hero, a foto se rasteriza em linhas de varredura com dessaturação/`brightness` (`index.html:113`, `js/overdrive.js:401-405`).
  - **Power-on dos blocos:** cards/timeline/hobbies/experiências/form recebem um flood de energia ao entrar no viewport, com stagger escalonado (`--od-wave-delay`, `js/overdrive.js:602-635`).
  - **Bug pré-existente corrigido:** a telemetria nunca aparecia — a div não tinha `id="odTelemetry"` e o overlay ficava preso em `opacity:0`; corrigido em `index.html:40`.
- **Evidência:** verificação via DOM/CDP em viewport desktop 1440×900, mobile 390×844 e `prefers-reduced-motion` — cidade dormindo no topo, dissolve ativo na saída do hero (`rip 0.47→0.55`), varredura e sweep disparando com stagger, telemetria ligando após o hero e desligamento total sob reduced-motion; detector sem antipadrão novo (restam apenas os avisos de contraste/padding pré-existentes). Limitação: sem leitura de imagem pelo modelo.
- **Análise:** a "cidade" agora é composta pelas linhas-andar do canvas que "acordam" com o scroll — o grid de hairlines genérico sai e entra um padrão que pertence ao mundo já documentado (energia, módulos, cidade-código). O `od-rip` transforma um detalhe (a foto com fundo transparente) em efeito coerente com a linguagem de varredura, em vez de deixá-lo neutro.
- **Decisão:** manter o padrão "Cidade-Código" energizado. Próximos do plano: `live`/`audit` para pinar o `2.5:1` (com `ignore.md`), `harden` para `aria-current` e `polish` de fechamento.

### 28 — `impeccable distill` (calibração da varredura e do boot strip)

- **Uso:** corrigir, após feedback do autor, dois parâmetros da camada "Cidade-Código": a linha de luz descendente (`.od-scan`) estava exagerada, causando desconforto visual, e o boot-strip original passava rápido demais para ser apreciado.
- **Alvo:** `css/overdrive.css` e `js/overdrive.js`.
- **Resultado:**
  - **`.od-scan` suavizado** (`css/overdrive.css:334-354`): banda encurtada de `26%` para `16%` de altura, brilho de pico reduzido ~5× (gradiente `0.16`→`0.06`, opacidade do keyframe `0.9`→`0.5` com fade suave) e cadência alargada de `15s`→`26s` — lê como varredura ambiente, não como estroboscópio.
  - **Boot-strip mais lento e legível** (`js/overdrive.js:83-92`): digitação de `2ms`→`24ms` por caractere, pausas `70ms`→`340ms`, barra de progresso `0.3s`→`0.6s` e retenção final `320ms`→`480ms` — a faixa permanece legível ~3 s sem bloquear a página.
- **Evidência:** detector aponta apenas o advisory pré-existente e intencional da cidade (fundo do hero); `prefers-reduced-motion` continua desarmando ambos os efeitos.
- **Análise:** a varredura deixou de competir com a leitura (participação de alfa foi o principal fator de desconforto) e o boot, por não atrapalhar o resto da página, pode ficar mais tempo no topo como convite à observação da assinatura.
- **Decisão:** manter os parâmetros recalibrados. Restam do plano: `live`/`audit` (pin do `2.5:1` + `aria-current`) e `polish` de fechamento + `adapt`/`optimize`.

### 29 — remoção completa da varredura `.od-scan` (feedback do autor)

- **Uso:** atender ao feedback do autor de que a linha de luz descendente (`.od-scan`) seguia desconfortável mesmo após a calibração do `distill` — remoção total do efeito, sem substituto.
- **Alvo:** `index.html` e `css/overdrive.css`.
- **Resultado:**
  - **`.od-scan` removido:** a div no hero (`index.html`) e, em `css/overdrive.css`, o bloco `.od-scan`, o keyframe `od-scan-drop` e a entrada na query `prefers-reduced-motion` foram apagados — a primeira dobra perde a varredura e mantém o restante da camada "Cidade-Código" (campo, boot, lâmpada, ghost, telemetria, progresso, `od-rip` e power-on).
- **Evidência:** grep sem ocorrências de `od-scan` em código; detector sem novos antipadrões.
- **Análise:** a metáfora de "sistema fazendo scan" já era sustentada pelo boot-strip e pela dissolução do retrato (`od-rip`); a passada recorrente era o único movimento perpétuo da primeira dobra e competia com a leitura. Removê-la preserva a assinatura sem fadiga ocular.
- **Decisão:** varredura aposentada. Restam do plano: `live`/`audit` (pin do `2.5:1` + `aria-current`) e `polish` de fechamento.

### 30 — remoção do campo de granulação em tela cheia (canvas `#odField`)

- **Uso:** atender ao feedback do autor — ao descer do hero, o site inteiro apresentava uma granulação (campo de partículas + bandas de luz "cidade" que acendiam com o scroll). Remoção total da camada full-screen, sem substituto.
- **Alvo:** `index.html`, `css/overdrive.css` e `js/overdrive.js`.
- **Resultado:**
  - **`#odField` removido** de `index.html` (o canvas fixo que desenhava partículas e as luzes-cidade sobre a página toda).
  - **CSS:** blocos `.od-field` (base e `prefers-reduced-motion`) apagados.
  - **JS:** removida toda a renderização de campo/partículas/cidade (campo, `drawCity` etc.). Os efeitos confinados ao hero foram preservados num scroll-handler `updateHeroLeave()` (`js/overdrive.js`): nome em cacos (`ghost`), dissolução do retrato (`od-rip`), dreno do título/foto; permanecem também boot-strip, lâmpada, tilt, telemetria, progresso e power-on dos blocos.
- **Evidência:** sem ocorrências de `odField`/`od-field`/`drawCity` em código (apenas histórico e screenshot antigo); detector sem novos antipadrões (restam os achados pré-existentes: hover `2.5:1`, paddings de seção, grid do hero, stripes do rip).
- **Análise:** o desconforto persistia porque a granulação era o canvas de tela cheia, não a varredura — o .od-scan foi apenas um sintoma de um excesso maior de "sistema cintilando". Removido o canvas, a camada fica toda confinada a elementos da página (hero e scroll) e o site desce limpo, mantendo a assinatura nos pontos que não cansam o olhar.
- **Decisão:** camada full-screen aposentada. Restam do plano: `live`/`audit` (pin do `2.5:1` + `aria-current`) e `polish` de fechamento.

### 31 — `impeccable audit` da página de aplicações (`aplicacoes.html`)

- **Uso:** medir tecnicamente a página de registros após o ciclo v2 e antes do novo commit do autor, separando pendências reais de falsos positivos herdados do Bootstrap. Também registrar o resultado na própria página (novo formato Problema/Hipótese/Orientação/Resultado/Evidência/Decisão).
- **Alvo:** `aplicacoes.html`.
- **Resultado:**
  - **Score: 16/20 (Good)** — acessibilidade 3, performance 3, responsividade 4, theming 3, integridade 3. Contraste, landmarks, responsividade e tokens aprovados nas cinco dimensões.
  - **Único achado:** hover Bootstrap `2.5:1` (branco sobre `#10b981`), verificado como resíduo do CSS comum — a página não tem botões, logo não é afetada.
  - **Página atualizada:** nova entrada **10 · impeccable audit** (`aplicacoes.html:162`) no formato Problema/Hipótese/Orientação/Resultado/Evidência/Decisão, isolando o hover do Bootstrap como pendência; stat da seção atualizado para **24/32 · 16/20** (`aplicacoes.html:41`).
- **Evidência:** detector pós-edição sem achados novos — apenas o conhecido hover `2.5:1`, já documentado; autor confirmou que o próximo passo é commit.
- **Análise:** o audit confirma que a página de aplicações está tecnicamente saudável e que o único resíduo é herdado do toolchain Bootstrap (falso positivo para esta página, sem botões). O registro interno na página transforma o histórico em evidência viva, no mesmo molde das seções de documentação já aplicadas.
- **Decisão:** ciclo v2 auditado e pronto para commit pelo autor. Próximo: re-audit após resolver o hover Bootstrap para validar o ganho de score.

## Registro da crítica inicial

### Pontos fortes

- A página apresenta rapidamente nome, cargo, bio, currículo, redes sociais e foto.
- A estrutura semântica, skip links, labels, textos alternativos, navegação responsiva e `prefers-reduced-motion` oferecem uma boa base de acessibilidade.
- A identidade navy e verde é consistente entre home, formulário e página intermediária.

### Problemas prioritários

#### P1 — A home concentra informação demais sem uma prioridade explícita

As nove seções, a navegação extensa e o botão fixo de personalização competem com a tarefa principal do recrutador: entender rapidamente quem é o autor, o que ele já fez e como contatá-lo.

- **Impacto:** aumenta a carga cognitiva e pode atrasar a chegada aos projetos e ao contato.
- **Comandos candidatos:** `shape`, `distill`, `layout` e `clarify`.
- **Próxima evidência:** comparar a ordem e a visibilidade das ações principais antes e depois.

#### P1 — O fluxo de personalização tem uma etapa intermediária pouco necessária

`index.html` leva a `interatividade.html`, que repete a ideia de personalização e só depois leva ao formulário. Para um administrador, isso alonga o caminho até a tarefa; para um recrutador, o botão de preencher compete com o conteúdo profissional.

- **Impacto:** mistura o produto final com uma demonstração técnica e torna menos claro quem deve usar a funcionalidade.
- **Comandos candidatos:** `critique`, `onboard`, `distill` e `clarify`.
- **Próxima evidência:** contar passos até o primeiro campo e verificar se o visitante distingue o fluxo administrativo do portfólio público.

#### P1 — Contraste e estados de ação precisam de correção

O detector apontou estados de hover com combinações como texto `#059669` sobre fundo `#10b981` e texto `#059669` sobre o próprio `#059669`, abaixo do contraste esperado. Isso aparece especialmente no fluxo do formulário.

- **Impacto:** reduz legibilidade e pode tornar ações difíceis de perceber.
- **Comandos candidatos:** `audit`, `colorize` e `harden`.
- **Próxima evidência:** medir os estados normal, hover, foco, erro e desabilitado contra WCAG AA.

#### P2 — Padrões visuais repetitivos deixam a interface genérica

O detector apontou bordas laterais verdes de 3px, brilho verde em fundo escuro, fonte Inter muito comum e repetição de cards com ícone, título e texto. Esses padrões funcionam isoladamente, mas juntos aproximam o projeto de um template genérico.

- **Impacto:** diminui a especificidade do portfólio pessoal e a força da apresentação.
- **Comandos candidatos:** `bolder`, `quieter`, `typeset` e `polish`.
- **Próxima evidência:** testar uma composição mais específica para projetos e experiência sem perder a leitura profissional.

#### P2 — Espaçamento e hierarquia tipográfica são inconsistentes

Foram detectados elementos com conteúdo próximo das bordas, especialmente cards, hobbies e seções. No formulário, a hierarquia de títulos e campos é pouco diferenciada; há também tamanhos inline fora da escala documentada.

- **Impacto:** prejudica escaneabilidade, conforto de leitura e consistência entre páginas.
- **Comandos candidatos:** `layout`, `typeset` e `extract`.
- **Próxima evidência:** comparar medidas de padding, escala tipográfica e comportamento em mobile.

#### P2 — O código visual tem deriva em relação ao sistema documentado

Há valores inline no HTML, como `#eab308`, `3rem`, `2.5rem`, `1.1rem`, `8px` e `5px`, que não aparecem como tokens equivalentes no `DESIGN.md`.

- **Impacto:** futuras mudanças podem produzir inconsistência e dificultar a comprovação da evolução.
- **Comandos candidatos:** `extract`, `document` e `polish`.
- **Próxima evidência:** inventariar tokens usados e decidir quais valores são legítimos ou devem ser centralizados.

### Personas e riscos

- **Recrutador com pouco tempo:** pode encontrar uma sequência longa de seções antes dos projetos e do contato; a navegação não comunica prioridade além da ordem linear.
- **Administrador iniciante:** pode não entender por que precisa passar por `interatividade.html` antes de chegar ao formulário e pode enfrentar um fluxo extenso com muitos grupos repetíveis.
- **Usuário de teclado ou baixa visão:** depende de contraste correto nos estados de interação e de uma hierarquia mais clara no formulário; os achados de low contrast são concretos.

### Observações menores

- Alinhamento do `docs/projeto.md` concluído: a cor primária documentada é verde esmeralda (`#10b981`/`#047857`/`#065f46`), em linha com `DESIGN.md` e `css/style.css`.
- O título e o texto de `interatividade.html` repetem a saudação e explicam a funcionalidade técnica antes de apresentar uma ação.
- Os valores de `aria-label` e os links existentes são uma boa base, mas ainda precisam de teste real em teclado, mobile e estados de erro.

## Próximos comandos previstos

Esta lista é planejamento, não evidência de uso. Cada comando só será adicionado ao histórico depois de aplicado com objetivo, resultado, evidência, análise e decisão. O `impeccable distill` (items 12, 19, 22 e 26), o `impeccable clarify` (item 13), o `impeccable typeset` (item 14), o `impeccable layout` (item 15), o `impeccable harden` (item 16), o `impeccable polish` (items 17 e 24), as medições `impeccable critique` (items 11, 18 e 25), o `impeccable audit` (item 20), o `impeccable overdrive` (items 21 e 27) e o `impeccable extract` (item 23) já foram aplicados e saem da lista.

1. `impeccable live`/`audit`: pinar o hover `2.5:1` no navegador real; se falso positivo, registrar em `.impeccable/critique/ignore.md`; adicionar `aria-current` ao link ativo da nav.
2. `impeccable polish`: fechar o ciclo sincronizando DESIGN.md/documentação/PROJETO.md com as mudanças do overdrive II.
3. `impeccable adapt`: comprovar o comportamento em telas móveis e largas com o overdrive calibrado.
4. `impeccable optimize`: reavaliar o peso dos ativos na home (overdrive adiciona canvas/scripts; lazy já iniciado no `harden`).

## Critério para registrar um novo comando

Um comando só entra no histórico quando houver:

- objetivo específico;
- prompt ou orientação complementar;
- resultado produzido;
- evidência verificável;
- análise do resultado;
- decisão tomada a partir da análise.

O catálogo acadêmico dos 23 comandos ficará em uma página complementar e não será confundido com este histórico de execução.
