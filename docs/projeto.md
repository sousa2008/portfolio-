# 01 — Definição do Projeto

## Nome do projeto

Portfólio Pessoal — Lucas de Sousa e Silva

## Problema / necessidade atendida

Meus canais de divulgação do trabalho (GitHub, LinkedIn e currículos) ficam espalhados e sem ligação entre eles. O portfólio resolve isso agrupando todas as informações profissionais, acadêmicas e pessoais em um único endereço, funcionando como um currículo virtual.

## Objetivo principal

Criar um currículo digital competitivo, que centralize minha apresentação, formação, competências, projetos e formas de contato em um só lugar, tornando-se um diferencial na busca por oportunidades.

## Público-alvo

Recrutadores e empresas da área de tecnologia, além de professores e colegas que queiram conhecer meu trabalho.

## Papéis de usuário

- **Administrador:** eu (dono do portfólio), responsável por preencher e manter as informações atualizadas.
- **Visitante:** recrutadores, empresas e professores que acessam o portfólio para conhecer meu perfil.
- **Visitante que experimenta:** qualquer pessoa pode simular o próprio portfólio usando o site como molde, preenchendo uma cópia com as suas informações. A simulação fica salva apenas no navegador dela e nunca altera a versão publicada.

## Cenário real de uso

Um recrutador pode ver todos os meus projetos apresentados de forma harmoniosa e bem organizada em um só site. Isso facilita a avaliação dele sobre meu perfil e melhora minhas chances de recrutamento.

## Proposta visual

Visual profissional e limpo, com alternância entre áreas escuras (navbar e seção inicial) e seções claras, cor primária verde esmeralda, tipografia Inter, cards com cantos arredondados, badges para tecnologias e animações discretas de entrada ao rolar a página. O layout é responsivo, adaptando-se a computadores e dispositivos móveis.

## Ideia criativa — portfólio como molde

Além de funcionar como currículo digital do autor, o site se propõe a ser uma demonstração de criatividade e manipulação de elementos visuais: qualquer visitante pode preencher uma cópia com as suas próprias informações e ver o layout se adaptar, como se o portfólio fosse um molde vivo. Essa simulação é sempre local (salva no navegador do visitante) e não altera a versão publicada do autor.

## Conteúdo apresentado

- Apresentação pessoal (nome, cargo, bio, foto e redes sociais)
- Sobre mim (apresentação detalhada e dados pessoais)
- Formação acadêmica
- Conhecimentos e competências
- Projetos realizados ou em desenvolvimento
- Experiências relevantes
- Hobbies e lazer
- Viagens realizadas
- Formas de contato

## Principais funcionalidades

- Navegação fixa com destaque da seção ativa e menu responsivo (hambúrguer no mobile)
- Animações de entrada nas seções ao rolar a página
- Ocultação automática de seções sem conteúdo (inclusive do menu)
- Simulação de portfólio para qualquer visitante: formulário de preenchimento com armazenamento em `localStorage`, com aviso de modo demonstração e de que a versão original permanece publicada
- Validação de campos obrigatórios com aviso dos pendentes
- Formulário de contato com validação que abre o cliente de e-mail já preenchido

## Tecnologias utilizadas

- HTML5 (semântico)
- CSS3
- JavaScript
- Bootstrap 5 (via CDN)
- LocalStorage

## Suposições a serem validadas

1. Se eles só olham LinkedIn/Gupy/currículo, o site pode ser ignorado.
2. Posso valorizar design ou projetos técnicos, mas eles podem valorizar soft skills ou experiência prévia. Sem evidência, é chute.
3. Se eu não planejar como direcionar tráfego, o site vira um "currículo bonito, mas invisível".
