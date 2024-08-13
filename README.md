# Lista de repositórios do GitHub

Plataforma para buscar e favoritar repositórios do Github.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Dependências](#Dependências)
- [Ferramentas e Configurações](#Ferramentas-e-Configurações)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Também é necessário realizar a seguinte configuração:

1. Gere um token de acesso pessoal no GitHub. [Guia de autenticação](https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28)
2. Crie um arquivo `.env` na raiz do projeto.
3. Adicione a linha `VITE_GITHUB_TOKEN=seu_token_aqui` no arquivo `.env`.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto:
  ```bash
  cd nome-do-repositorio

3. Instale as dependências com npm i ou yarn

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- npm start ou yarn start: Inicia o servidor de desenvolvimento.
- npm run build ou yarn build: Compila o projeto para produção.
- npm test ou yarn test: Executa os testes.
- npm run lint ou yarn lint: Verifica o código usando ESLint.

## Dependências

- React - Biblioteca JavaScript para interfaces de usuário.
- React DOM - Renderizador de interfaces para ambientes web.
- React Router Dom - Gerenciamento de rotas no React.
- React Icons - Conjunto de ícones populares para React.
- Axios - Cliente HTTP para realizar requisições.
- Day.js - Biblioteca para manipulação de datas.
- React Query - Gerenciamento de estado de servidor.
- SweetAlert2 - Alertas e pop-ups customizados.

## Ferramentas e Configurações

- Vite - Bundler rápido e leve para desenvolvimento front-end.
- TypeScript - Superconjunto do JavaScript que adiciona tipagem estática.
- ESLint - Ferramenta para garantir a qualidade do código.
- Vitest - Test runner para projetos Vite.
- Tailwind CSS - Framework de utilitários CSS.
- PostCSS - Ferramenta para transformar estilos com plugins JS.
- Testing Library - Testes para componentes React.
- JSDOM - Emulador de DOM para testes.
- SWC - Compilador de JavaScript/TypeScript utilizado pelo Vite para React.
