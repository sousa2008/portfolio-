# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML5, CSS3, JavaScript, Bootstrap 5 via CDN e `localStorage`, sem backend ou banco de dados nesta etapa.

## Users

O público principal é formado por recrutadores e empresas da área de tecnologia. Professores e colegas são públicos secundários que acessam o site para conhecer o perfil, a formação e os trabalhos do autor.

O administrador é o próprio autor, responsável por preencher, editar e manter as informações do portfólio.

## Product Purpose

O portfólio centraliza apresentação pessoal, formação acadêmica, competências, projetos, experiências e canais de contato em um único endereço. Seu sucesso é permitir que um visitante compreenda rapidamente o perfil do autor e encontre evidências do seu trabalho e formas de contato. Como ideia criativa, o site também funciona como um molde (placeholder) vivo: qualquer visitante pode preencher uma cópia com as suas próprias informações e ver o layout se adaptar, sem alterar nada no portfólio publicado — uma demonstração de inovação, criatividade e manipulação de elementos visuais.

## Positioning

É um currículo digital pessoal com conteúdo editável pelo autor por meio de um formulário, sem depender de servidor ou banco de dados. Ao mesmo tempo, o site se posiciona como uma experiência interativa: qualquer visitante pode simulá-lo com as próprias informações, validando o layout como um molde criativo. Os dados da simulação ficam armazenados localmente no navegador do visitante e não afetam a versão publicada do autor.

## Operating Context

O visitante acessa o portfólio publicado para avaliar o perfil do autor, navegar entre as seções e iniciar um contato. Ele também pode experimentar o layout como um molde: preencher uma simulação com os seus dados, ver o resultado aplicado e restaurar o portfólio original. O administrador acessa o mesmo fluxo para preencher e editar as informações oficiais, salvá-las no `localStorage` e restaurar o conteúdo padrão quando necessário.

## Capabilities and Constraints

- Apresenta perfil, formação, competências, projetos, experiências, hobbies, viagens e contato.
- Oferece navegação fixa, rolagem suave, menu responsivo e destaque da seção ativa.
- Oculta seções sem conteúdo quando os dados personalizados são carregados.
- Permite que qualquer visitante simule o próprio portfólio com os seus dados, sempre em uma cópia local do navegador.
- Deixa explícito ao visitante que está em modo demonstração e que a versão original permanece publicada para os demais.
- Permite editar dados e itens repetíveis pelo formulário.
- Valida campos obrigatórios e abre o cliente de e-mail com uma mensagem preenchida.
- Deve permanecer em HTML, CSS e JavaScript, com Bootstrap 5 via CDN e `localStorage`.
- Não há autenticação, contas, banco de dados, backend, comentários, mensagens diretas ou notificações.
- Nenhuma simulação altera a versão pública do portfólio; o autor é o único responsável pelas informações publicadas.
- O conteúdo factual deve vir das informações do autor; a simulação pertence ao visitante que a cria.

## Brand Commitments

- Nome atual: Portfólio Pessoal — Lucas de Sousa e Silva.
- Comunicação em português do Brasil.
- Tom profissional, claro e pessoal.
- A identidade visual existente usa áreas escuras, acento verde, tipografia Inter, cards arredondados e animações discretas.

## Evidence on Hand

- Conteúdo e estrutura atuais em `index.html`, `formulario.html` e `interatividade.html`.
- Estilos compartilhados em `css/style.css`.
- Interações e renderização em `js/script.js` e `js/form.js`.
- Planejamento do produto em `docs/projeto.md`, `docs/mvp.md`, `docs/backlog.md` e `docs/documentacao.md`.
- Ativos em `assets/`, incluindo fotos e currículo em PDF.
- Publicação registrada no README em `https://sousa2008.github.io/portfolio-/`.
- Ainda não há evidência de aplicação dos comandos do Impeccable; essa evidência será registrada durante a criação da v2.

## Product Principles

- Apresentar o autor com clareza e sem conteúdo inventado.
- Priorizar evidências concretas de formação, projetos e experiência.
- Manter navegação simples e funcional em telas grandes e pequenas.
- Fazer toda interação visível cumprir uma função real.
- Preservar as restrições técnicas da atividade e documentar as decisões.

## Accessibility & Inclusion

O projeto já possui idioma `pt-BR`, landmarks semânticos, link para pular ao conteúdo, rótulos de formulário, textos alternativos para imagens, atributos ARIA em controles e suporte a `prefers-reduced-motion`. A v2 deve preservar e verificar essas práticas, além de manter contraste e navegação por teclado adequados.