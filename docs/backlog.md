# 03/04/05/07 — Histórias de Usuário, Critérios de Aceitação, MoSCoW e Backlog

## Histórias de usuário

### Visitante

- **US01** — Como visitante, quero visualizar a apresentação pessoal do autor (nome, cargo, bio, foto e redes sociais), para identificá-lo e conhecê-lo rapidamente.
- **US02** — Como visitante, quero navegar entre as seções por um menu fixo, para acessar o conteúdo com facilidade em qualquer dispositivo.
- **US03** — Como visitante, quero ver a formação acadêmica do autor, para avaliar sua qualificação.
- **US04** — Como visitante, quero ver os conhecimentos e competências organizados por categoria, para conhecer as habilidades técnicas e comportamentais do autor.
- **US05** — Como visitante, quero ver os projetos com título, descrição, tecnologias e links, para avaliar a experiência prática do autor.
- **US06** — Como visitante, quero ver as experiências relevantes do autor, para entender sua trajetória.
- **US07** — Como visitante, quero ver os hobbies e o lazer do autor, para conhecê-lo além do aspecto profissional.
- **US08** — Como visitante, quero ver as viagens realizadas pelo autor, para conhecer experiências que o marcaram.
- **US09** — Como visitante, quero entrar em contato pelos canais informados (e-mail, telefone, GitHub, LinkedIn), para tirar dúvidas ou propor oportunidades.
- **US11** — Como visitante, quero ver apenas as seções que possuem conteúdo, para não encontrar áreas vazias no site.

### Administrador

- **US10** — Como administrador, quero preencher e editar as informações do portfólio por meio de um formulário, para manter o conteúdo atualizado sem alterar o código.

## Critérios de aceitação

**US01 — Apresentação pessoal**

- A seção inicial exibe nome, cargo, bio curta e foto de perfil.
- Quando não há foto, é exibido um placeholder "Sem imagem selecionada".
- Os links de GitHub, LinkedIn e e-mail abrem corretamente (em nova aba, quando externos).

**US02 — Navegação**

- O menu fixo contém links para todas as seções existentes e a rolagem até elas é suave.
- O link da seção visível recebe destaque visual durante a rolagem.
- Em telas menores, o menu é acessível por botão hambúrguer, que abre e fecha corretamente.

**US03 — Formação acadêmica**

- A seção "Formação Acadêmica" lista as formações em linha do tempo, com curso, instituição e período.

**US04 — Conhecimentos e competências**

- A seção apresenta três categorias: Linguagens e Frameworks, Ferramentas e Soft Skills.
- Cada categoria exibe badges com os itens informados.

**US05 — Projetos**

- Cada projeto possui título, descrição e tecnologias utilizadas.
- Quando houver link de código ou demo, ele abre corretamente em nova aba.

**US06 — Experiências relevantes**

- Cada experiência exibe cargo, empresa, período, descrição e competências utilizadas (quando informados).

**US07 — Hobbies e lazer**

- Cada hobby exibe ícone e nome, com descrição opcional.

**US08 — Viagens**

- Cada viagem exibe destino, período e descrição (quando informados).

**US09 — Contato**

- A seção exibe e-mail, telefone e localização, além dos botões de GitHub e LinkedIn.
- O formulário valida os campos obrigatórios e, ao enviar, abre o cliente de e-mail do visitante já preenchido com assunto e mensagem destinados ao e-mail exibido na página.

**US10 — Preenchimento e edição**

- Os botões "Preencher Portfólio" e "Editar" abrem a página do formulário.
- Campos obrigatórios vazios impedem o salvamento e são listados em um aviso no topo.
- Itens repetíveis (formação, projetos, experiências, hobbies e viagens) podem ser adicionados e removidos.
- Ao salvar, os dados são gravados no `localStorage` e o visitante é redirecionado ao `index.html`, que passa a exibir as informações preenchidas.
- O botão "Limpar todas as informações" apaga os dados gravados e restaura o portfólio padrão.

**US11 — Seções sem conteúdo**

- Seções sem dados cadastrados ficam ocultas, inclusive seus itens no menu de navegação.

## Priorização MoSCoW

| Prioridade | Histórias | Justificativa |
|---|---|---|
| Must have | US01 a US09 | Conteúdo obrigatório exigido pela atividade e essencial para que o portfólio seja acessado, utilizado e avaliado. |
| Should have | US10 | Diferencial importante que facilita a manutenção do conteúdo, mas o portfólio funciona mesmo sem ele. |
| Could have | US11 | Refinamento de experiência implementado como melhoria desejável. |
| Won't have now | Login, contas de recrutador, comentários, DMs, propostas de vaga, notificações, banco de dados | Dependem de backend/banco de dados, fora das restrições técnicas da entrega (somente HTML, CSS e JavaScript). |

## Backlog acionável

| ID | Item do backlog | História relacionada | Prioridade MoSCoW | Critérios de aceitação | Status |
|---|---|---|---|---|---|
| BL01 | Criar seção de apresentação pessoal (hero) | US01 | Must have | Nome, cargo, bio e foto exibidos; redes sociais com links válidos; placeholder quando não há imagem | Concluído |
| BL02 | Implementar menu de navegação fixo e responsivo | US02 | Must have | Rolagem suave até cada seção; seção ativa destacada; hambúrguer abre/fecha no mobile | Concluído |
| BL03 | Criar seção Sobre Mim com dados detalhados | US01 | Must have | Texto de apresentação, foto e dados pessoais (nome, localização, nascimento, e-mail, telefone, idiomas) exibidos | Concluído |
| BL04 | Criar seção de formação acadêmica | US03 | Must have | Formações listadas em linha do tempo com curso, instituição e período | Concluído |
| BL05 | Criar seção de conhecimentos e competências | US04 | Must have | Três categorias com badges dos itens informados | Concluído |
| BL06 | Implementar listagem de projetos | US05 | Must have | Projetos possuem título, descrição e tecnologias; links de código/demo válidos quando existirem | Concluído |
| BL07 | Criar seção de experiências relevantes | US06 | Must have | Cargo, empresa, período, descrição e competências exibidos quando informados | Concluído |
| BL08 | Criar seção de hobbies e lazer | US07 | Must have | Ícone e nome por hobby, com descrição opcional | Concluído |
| BL09 | Criar seção de viagens | US08 | Must have | Destino, período, descrição e imagem opcional por viagem | Concluído |
| BL10 | Implementar seção de contato com formulário funcional | US09 | Must have | E-mail, telefone e localização exibidos; formulário valida campos e abre cliente de e-mail preenchido | Concluído |
| BL11 | Implementar formulário de preenchimento/edição com localStorage | US10 | Should have | Salvamento grava os dados e redireciona ao index com conteúdo aplicado; obrigatórios validados; itens repetíveis adicionados/removidos; limpar tudo restaura o padrão | Concluído |
| BL12 | Ocultar seções e itens de menu sem conteúdo | US11 | Could have | Seção e respectivo item do menu desaparecem quando não há dados cadastrados | Concluído |
