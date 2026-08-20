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

## Cenário real de uso

Um recrutador pode ver todos os meus projetos apresentados de forma harmoniosa e bem organizada em um só site. Isso facilita a avaliação dele sobre meu perfil e melhora minhas chances de recrutamento.

## Proposta visual

Visual profissional e limpo, com alternância entre áreas escuras (navbar e seção inicial) e seções claras, cor primária azul, tipografia Inter, cards com cantos arredondados, badges para tecnologias e animações discretas de entrada ao rolar a página. O layout é responsivo, adaptando-se a computadores e dispositivos móveis.

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
- Formulário de preenchimento/edição do portfólio com armazenamento em `localStorage`
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
