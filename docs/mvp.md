# 06 — Descrição do MVP

## Fluxo central

> Eu publico minhas informações e projetos no portfólio, e os recrutadores visualizam tudo de forma clara em um só lugar.

## Necessidades atendidas pelo MVP

O MVP é o portfólio pessoal publicado, navegável e responsivo, que permite:

- ao visitante, conhecer minha apresentação, formação, competências, projetos, experiências, hobbies, viagens e formas de contato;
- ao administrador (eu), preencher e editar todas essas informações por meio de um formulário, sem alterar código.

## Seções disponíveis

Início (apresentação pessoal), Sobre Mim, Formação Acadêmica, Conhecimentos e Competências, Projetos, Experiências Relevantes, Hobbies e Lazer, Viagens e Contato.

## Interações implementadas

- Navegação fixa com rolagem suave, destaque da seção ativa e menu hambúrguer no mobile;
- Animações de entrada nas seções ao rolar a página;
- Formulário de contato com validação que abre o cliente de e-mail já preenchido (`mailto:`);
- Formulário de preenchimento/edição do portfólio com validação de campos obrigatórios, itens repetíveis (adicionar/remover) e armazenamento em `localStorage`;
- Simulação como molde criativo: qualquer visitante pode preencher uma cópia com as próprias informações; um aviso de modo demonstração deixa claro que a versão original permanece publicada para os demais visitantes;
- Opção de limpar todos os dados, voltando ao portfólio padrão;
- Ocultação automática de seções (e respectivos itens do menu) sem conteúdo.

## Histórias de usuário do MVP

- **Must have:** US01, US02, US03, US04, US05, US06, US07, US08, US09
- **Should have:** US10
- **Could have:** US11

A definição completa das histórias, dos critérios de aceitação e da tabela de backlog está em `backlog.md`.

## O que fica fora desta primeira versão (Won't have now)

- Menu de login com senha, usuário e e-mail;
- Criação de conta de recrutador;
- Comentários e avaliações em posts;
- Mensagens diretas (DMs);
- Envio e análise de propostas de vagas;
- Notificação de acessos e comentários;
- Banco de dados.

Esses requisitos foram reconhecidos no planejamento inicial, mas dependem de backend/banco de dados, o que violaria as restrições técnicas da atividade (somente HTML, CSS e JavaScript). A necessidade de "subir projetos" e "cadastrar dados pessoais" foi atendida de forma adaptada, por meio do formulário de preenchimento com `localStorage`.

## Condições de conclusão do MVP

O MVP é considerado concluído quando:

1. Todas as histórias classificadas como Must have estiverem implementadas com seus critérios de aceitação verificados;
2. Todas as seções obrigatórias estiverem presentes e legíveis em computadores e dispositivos móveis;
3. Nenhum link, botão ou funcionalidade estiver quebrado ou simulado;
4. A documentação corresponder exatamente à aplicação entregue.
