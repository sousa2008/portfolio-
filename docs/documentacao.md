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
