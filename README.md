<h1 align="center">
    Bootcamp Ignite <br/>
    Desafio 03: Criando um hook de carrinho de compras
</h1>

<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jonathanpauluze/rocketshoes">
	
  <a href="https://www.linkedin.com/in/jonathanpauluze/">
    <img alt="Made by jonathanpauluze" src="https://img.shields.io/badge/made%20by-jonathanpauluze-%2304D361">
  </a>
  
  <a href="https://github.com/jonathanpauluze/rocketshoes/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jonathanpauluze/rocketshoes">
  </a>

</p>
<p align="center">
  <a href="#information_source-Sobre-o-desafio">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-e-ferramentas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-como-rodar-o-projeto">Como rodar o projeto</a>
</p>

## :information_source: Sobre o desafio

Nesse desafio criei um hook de carrinho de compras para aplicação pré-construída.

![./.github/screenshot.png](./.github/application.gif)

Os dados do carrinho, subtotal e total são atualizados e persistidos no local storage em toda interação do usuário com as funcionalidades da aplicação.
Na aplicação é possível:
- adicionar um produto ao carrinho
- remover um produto do carrinho
- incrementar quantidade de produto no carrinho
- decrementar quantidade de produto no carrinho

## :rocket: Tecnologias e Ferramentas
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Axios](https://axios-http.com)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## :wrench: Como rodar o projeto

É necessário ter instalado:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Faça um clone do projeto

```bash
$ git clone https://github.com/jonathanpauluze/rocketshoes

# ou com a CLI do GitHub
$ gh repo clone jonathanpauluze/rocketshoes
```

### Instale as dependências
```bash
# Acesse o diretório do projeto
$ cd rocketshoes

# Instale as dependências
$ yarn
```

### Inicie a aplicação
```bash
# Inicie a API Fake com JSON Server
$ yarn server

# Inicie o servidor de desenvolvimento
$ yarn start
```


<p align="center">Feito com ♥ por <a href="https://linkedin.com/in/jonathanpauluze" target="_blank">Jonathan Pauluze</a></p>
