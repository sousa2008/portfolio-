---
name: Portfólio Pessoal — Lucas de Sousa e Silva
description: Currículo digital pessoal com apresentação, projetos e contato em uma experiência web responsiva.
colors:
  bg-dark: "#0f172a"
  bg-light: "#1e293b"
  white: "#ffffff"
  text-secondary: "#e2e8f0"
  text-muted: "#94a3b8"
  accent-primary: "#10b981"
  accent-bright: "#34d399"
  accent-hover: "#047857"
  accent-deep: "#065f46"
  accent-active: "#064e3b"
  accent-secondary: "#3b82f6"
  accent-sky: "#7dd3fc"
  accent-teal: "#5eead4"
  tertiary: "#a78bfa"
  info-soft: "#60a5fa"
  error-soft: "#fca5a5"
  border: "#475569"
  shadow-overlay: "rgba(0, 0, 0, 0.55)"
  warning: "#f59e0b"
  error: "#ef4444"
  error-deep: "#dc2626"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(3rem, 7.5vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  display-md:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.08
  form-title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.9rem, 4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
  headline-xl:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 2.6vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  docs-title:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  hero-mobile:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(2.5rem, 11vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  title-lg:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title-form:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 650
    lineHeight: 1.3
  body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  body-lg:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.7
  card-body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.65
  input:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.4
  nav:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.4
  meta:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: "0.035em"
  caption:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.45
  micro:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
  terminal:
    fontFamily: "ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', Consolas, monospace"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.85
  telemetry:
    fontFamily: "ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
  stat:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  icon:
    fontFamily: "Bootstrap Icons"
    fontSize: "1.3rem"
  icon-sm:
    fontFamily: "Bootstrap Icons"
    fontSize: "1.15rem"
  icon-md:
    fontFamily: "Bootstrap Icons"
    fontSize: "1.8rem"
rounded:
  xs: "4px"
  sm: "6px"
  btn: "8px"
  md: "10px"
spacing:
  section: "5.5rem 0"
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
components:
  button-base:
    rounded: "{rounded.btn}"
    fontWeight: 600
  button-primary:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.white}"
    rounded: "{rounded.btn}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.white}"
  button-primary-active:
    backgroundColor: "{colors.accent-active}"
    textColor: "{colors.white}"
  button-outline-danger:
    textColor: "{colors.error-soft}"
    border: "rgba(239, 68, 68, 0.55)"
    hoverBackgroundColor: "{colors.error}"
    hoverTextColor: "{colors.white}"
  card:
    backgroundColor: "{colors.bg-light}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: "1.3rem 1.5rem"
  project-icon:
    textColor: "{colors.accent-primary}"
    size: "3rem"
  telemetry:
    backgroundColor: "rgba(15, 23, 42, 0.82)"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    border: "rgba(16, 185, 129, 0.25)"
    fontFamily: "{typography.telemetry.fontFamily}"
    fontSize: "0.7rem"
    letterSpacing: "0.08em"
  charge-line:
    backgroundColor: "linear-gradient(180deg, {colors.accent-bright}, {colors.accent-primary})"
    width: "3px"
    rounded: "{rounded.sm}"
    shadow: "0 1px 8px rgba(16, 185, 129, 0.45)"
  progress-rail:
    backgroundColor: "linear-gradient(90deg, {colors.accent-deep}, {colors.accent-primary}, {colors.accent-bright})"
    height: "2px"
    shadow: "0 1px 6px rgba(16, 185, 129, 0.4)"
  boot-strip:
    backgroundColor: "rgba(15, 23, 42, 0.94)"
    borderBottom: "1px solid rgba(16, 185, 129, 0.3)"
    duration: "<1s"
---

# Design System: Portfólio Pessoal — Lucas de Sousa e Silva

## Overview

**Creative North Star: "Currículo digital em camadas"**

O sistema atual apresenta o portfólio como uma experiência escura, profissional e orientada à leitura rápida. O fundo navy cria continuidade entre a navegação e as seções, enquanto o verde funciona como acento para ações, links, ícones, estados ativos e evidências de interação.

**Dynamic layer — "Cidade-Código".** Na página principal, o portfólio se comporta como um sistema vivo: uma faixa fina de terminal abre a sessão em menos de um segundo sem bloquear a primeira dobra, um campo de partículas discreto paira sobre a página, um trilho-sinal vertical na borda esquerda se energiza conforme o scroll (nós marcam cada seção; o módulo ativo pulsa), o nome do hero se desmonta em cacos de sinal enquanto sai do viewport, os títulos de seção entram online letra a letra com o traço sublinhado crescendo da esquerda, a linha da formação carrega como um circuito e um retrato holográfico acompanha o cursor. Uma telemetria fixa (somente desktop) reporta o módulo ativo e o progresso de leitura, e só aparece quando o hero sai do viewport — a primeira dobra elege um pilar: o nome em cacos e a lâmpada. Tudo degrada com elegância e respeita `prefers-reduced-motion`; os tokens correspondentes estão nos componentes `boot-strip`, `telemetry`, `charge-line` e `progress-rail`.

A página principal alterna seções escuras e claras dentro de uma mesma família cromática. O conteúdo é organizado em blocos conhecidos: hero, dados pessoais, timeline, cards, experiência, contato e rodapé. A linguagem visual é funcional e baseada em Bootstrap 5, com animações de entrada discretas, uma moldura assimétrica fina atrás da foto do hero e elevação moderada nos elementos interativos.

**Key Characteristics:**
- Base escura com superfícies navy alternadas.
- Verde esmeralda reservado para ação, foco e destaque.
- Tipografia autoral: serifa Spectral para autoria + grotesk Onest para leitura, com hierarquia por escala e peso.
- Cards e campos com bordas, raios moderados e sombras controladas.
- Assimetria pontual no hero e no primeiro projeto para marcar a autoria sem ruído.
- Layout responsivo com navegação fixa e menu móvel.

## Colors

A paleta combina navy profundo, superfícies slate e verde esmeralda como acento principal; azul, amarelo e vermelho aparecem como cores semânticas de apoio.

### Primary
- **Verde esmeralda de ação** (`#10b981`): ícones, títulos de formulário, estados de foco, badges de destaque e elementos ativos.
- **Verde esmeralda hover** (`#047857`): fundo repouso dos botões primários.
- **Verde esmeralda profundo** (`#065f46`): estado hover e reforço de ações primárias.
- **Verde esmeralda ativo** (`#064e3b`): estado `:active` dos botões primários.
- **Verde esmeralda claro** (`#34d399`): realce, gradientes e linha de energia do overdrive.

### Secondary
- **Azul informativo** (`#3b82f6`): estados informativos herdados do Bootstrap.
- **Azul informativo claro** (`#60a5fa`): badges informativos (`.badge-info`) e validade de links/ferramentas.
- **Violeta terciário** (`#a78bfa`): badges de Soft Skills (`.badge-tertiary`) e categorias não técnicas.
- **Céu e turquesa** (`#7dd3fc`, `#5eead4`): faíscas do campo de partículas da camada overdrive.

### Neutral
- **Navy profundo** (`#0f172a`): fundo principal, hero, navbar, footer e grupos internos do formulário.
- **Slate de superfície** (`#1e293b`): seções alternadas, cards, formulário e containers.
- **Branco** (`#ffffff`): títulos, marca e texto de alto contraste.
- **Slate claro** (`#e2e8f0`): texto secundário e labels.
- **Slate muted** (`#94a3b8`): corpo de texto, metadados e placeholders.
- **Slate de borda** (`#475569`): bordas neutras e contornos de elementos.
- **Vermelho claro** (`#fca5a5`): texto do alerta de erro de salvamento e rótulo de remover.

### Named Rules
**The Accent-with-Purpose Rule.** O verde deve indicar ação, foco, seleção, progresso ou estrutura; não deve ser aplicado indiscriminadamente em todo texto.

## Typography

**Display Font:** Spectral (com `Georgia` e fallback serif) — reservada ao nome do autor, aos cabeçalhos editoriais e aos números de destaque.
**Body Font:** Onest (com `system-ui`, `Segoe UI` e fallback sans-serif) — todo o corpo, a interface, os labels e os metadados.
**Label/Mono Font:** `--font-mono` (`ui-monospace`, `Cascadia Mono`, `Consolas`) é reservada à camada overdrive — terminal de boot e telemetria. Dados e medidas do conteúdo comum não aparecem em mono.

**Character:** O sistema combina uma serifa de alto contraste para os momentos de autoria e um grotesk sóbrio para a leitura. O nome e os títulos editoriais usam Spectral em peso único 400, com tracking quase neutro, imprimindo uma voz humana sobre o navy — o contraste deliberado com o corpo grotesk é a assinatura "sob medida" que afasta o visual de template. O cargo usa tracking moderado sem caixa alta, para variar com segurança com cargos longos na simulação; o corpo em Onest mantém legibilidade neutra e zoom segura em qualquer superfície escura.

### Hierarchy
- **Display** (Spectral 400, `clamp(3rem, 7.5vw, 5.5rem)`, 1.02, tracking `-0.012em`): nome do autor no hero, com largura controlada para uma silhueta editorial.
- **Display MD** (Spectral 400, `clamp(2.4rem, 5vw, 4rem)`, 1.08): cabeçalhos das páginas de documentação.
- **Form Title** (Spectral 400, `clamp(1.9rem, 4vw, 2.5rem)`, 1.15): título das páginas de formulário e interatividade.
- **Headline XL** (Onest 700, `clamp(1.9rem, 3.4vw, 2.4rem)`, 1.15, tracking `-0.02em`): títulos de projetos e contato.
- **Headline** (Onest 700, `clamp(1.7rem, 3vw, 2.2rem)`, 1.15, tracking `-0.02em`): títulos de seção.
- **Headline SM** (Onest 700, `clamp(1.45rem, 2.6vw, 1.75rem)`): títulos de seções de apoio (hobbies e viagens).
- **Title** (Onest 700, `1.1rem`, 1.3, tracking `-0.01em`): cards, experiências e itens de conteúdo.
- **Body** (Onest 400, `1rem`, 1.75, tracking `0.005em`): apresentação e descrições, com medida preferencial de 56–60ch no hero e nas introduções.
- **Body SM** (Onest 400, `0.9rem`, 1.65): textos de cards, timeline e metadados de apoio.
- **Label** (Onest 600, `0.85rem`, 1.4): rótulos de formulário e navegação auxiliar.
- **Meta** (Onest 550, `0.78rem`, 1.4, tracking `0.035em`): empresa, período, badges e notas de rodapé.
- **Caption** (Onest 400, `0.8rem`, 1.45): legendas e descrições curtas de hobbies.
- **Micro** (Onest 500, `0.75rem`): categorias de documentação.

Campos de formulário usam 1rem de corpo para evitar o zoom automático do iOS e manter o conforto de leitura; o mesmo vale para toda a área de contato.

## Layout

O conteúdo usa containers responsivos do Bootstrap, com largura máxima do hero de `1200px` e grids baseados em colunas. O hero usa duas colunas em telas maiores, com conteúdo à esquerda e imagem à direita; em telas menores, a composição deve se tornar uma única coluna.

As seções principais usam `5.5rem` de espaçamento vertical e alternam entre `bg-dark` e `bg-light`. Projetos e contato são regiões prioritárias e usam `7rem` em telas amplas (`5rem` em telas menores); hobbies e viagens são regiões de apoio e usam `4rem` (`3rem` em telas menores). Cards e listas repetíveis usam grids com gaps responsivos e `1.5rem` de respiro interno. A navbar fica fixa no topo, reduz o padding após o scroll e transforma seus links em menu colapsável abaixo de `991.98px`.

## Elevation & Depth

O sistema usa um híbrido de camadas tonais e sombras neutras. A diferença entre `#0f172a` e `#1e293b` cria a maior parte da profundidade; sombras aparecem em cards, botão flutuante, hover e formulário. O hero acrescenta profundidade ambiental com gradientes radiais verdes e uma animação de deriva que respeita redução de movimento.

### Shadow Vocabulary
- **Small** (`0 1px 3px rgba(0, 0, 0, 0.3)`): elevação discreta.
- **Medium** (`0 4px 12px rgba(0, 0, 0, 0.4)`): cards e controles destacados.
- **Large** (`0 8px 24px rgba(0, 0, 0, 0.5)`): botão de edição e estados elevados.
- **Accent:** não é usado como sombra de interface; o verde aparece em bordas, ícones e estados.

## Shapes

Os elementos usam cantos moderadamente arredondados: `10px` para cards e containers (`--radius`), `6px` para campos, badges e linhas de timeline (`--radius-sm`), `4px` para o botão de remover grupos repetíveis (`--radius-xs`) e `8px` para CTAs e botões (`--btn-radius`). A timeline usa uma linha vertical com pontos circulares; links sociais usam círculos de `50px`. A estrutura privilegia bordas finas e superfícies tonais, sem barras laterais grossas ou halos como decoração.

## Components

### Buttons
- **Shape:** `--btn-radius` (`8px`) em todos os botões, via `--bs-btn-border-radius`.
- **Primary:** fundo `#047857` (repouso), `#065f46` (hover) e `#064e3b` (ativo), texto branco, peso 600.
- **Tokens:** os `btn-*` do Bootstrap são mapeados diretamente para as variáveis `--bs-btn-*`; `--btn-bg`, `--btn-bg-hover`, `--btn-bg-active` e `--btn-fg` são a fonte única.
- **Outline:** contorno verde translúcido para primário/success; azul claro para secondary; slate para dark/light; vermelho para danger, com hover preenchido.
- **Danger:** fundo `#ef4444` (hover `#b91c1c`, ativo `#991b1b`) e texto branco; botões outline usam `#dc2626` (error-deep) em hover/ativo para contraste AA (branco ≈ 4,85:1).
- **Focus:** anel `--focus-ring` (3px, verde translúcido) em campos; contorno `--focus-outline` (3px âmbar) nas ações de teclado.

### Chips
- **Style:** `--radius-sm`, peso 600 e fundo translúcido com borda de mesmo tom. Três variantes semânticas: `.badge-accent` (verde — linguagens, projetos e períodos), `.badge-info` (azul claro — ferramentas e competências) e `.badge-tertiary` (violeta — Soft Skills).
- **State:** servem para tecnologias, ferramentas, competências e metadados, sem assumir comportamento de filtro.

### Cards / Containers
- **Corner Style:** `10px` em cards e `6px` em grupos internos.
- **Background:** superfície `#1e293b` sobre fundos `#0f172a` ou seções alternadas.
- **Shadow Strategy:** sombra discreta em repouso e maior em hover ou formulários.
- **Border:** borda slate ou verde translúcida; projetos reforçam a borda no hover.
- **Internal Padding:** normalmente `1.3rem 1.5rem` para conteúdo e `1rem` a `1.2rem` em grupos de formulário.

### Inputs / Fields
- **Style:** fundo navy, borda verde translúcida, raio `6px`, texto em slate claro (`#e2e8f0`) ao digitar e slate muted (`#94a3b8`) em labels auxiliares; `color-scheme: dark` nos controles para widgets nativos consistentes.
- **Focus:** borda verde e anel de foco de `3px` com verde translúcido.
- **Error / Disabled:** o formulário usa alertas amarelos para campos ausentes e cores semânticas do Bootstrap para validação; o texto interno do alerta de faltantes permanece âmbar sobre o fundo âmbar translúcido.

### Navigation
- **Style:** navbar fixa navy quase opaca, com blur, borda inferior verde translúcida e links pequenos em branco com opacidade reduzida.
- **States:** o link ativo e o hover ficam brancos; o menu móvel usa superfície navy, padding interno e separadores sutis.
- **Mobile treatment:** colapso Bootstrap abaixo de `991.98px`, acionado por botão hambúrguer.

### Timeline
Linha vertical verde translúcida, pontos circulares com halo e conteúdo em cards com borda esquerda verde. É o componente de assinatura da formação acadêmica.

## Do's and Don'ts

### Do:
- **Do** manter a relação de contraste entre navy, superfície e texto muted.
- **Do** usar o verde para ação, foco e estrutura relevante.
- **Do** preservar o ritmo de seções com padding amplo e containers responsivos.
- **Do** manter animações discretas e respeitar `prefers-reduced-motion`.
- **Do** preservar texto alternativo, labels, skip links e navegação por teclado.

### Don't:
- **Don't** introduzir uma nova família tipográfica sem decisão documentada.
- **Don't** usar o verde como cor dominante em todos os textos e superfícies.
- **Don't** remover estados de foco ou substituir interações reais por decoração.
- **Don't** criar cards, botões ou links sem conteúdo ou função correspondente.
- **Don't** inventar informações pessoais, projetos, experiências ou resultados.