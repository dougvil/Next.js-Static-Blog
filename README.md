# README #

## Descrição do projeto ##

* Criação de blogs estáticos para Descontalia utilizando Next.js
* Versão 1.0.0
* Exemplo disponível em [dicasdetv.com](https://www.dicasdetv.com)

## Como replicar e rodar o projeto? ##

* Clonar o repositório para um diretório local
* Entrar no diretório raíz do projeto
* Instalar as dependências com `npm install`
* Iniciar o projeto com `npm run dev` 

### Dependências ###

* [Next.js](https://nextjs.org/learn/) 
* [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

### Dicas para criação de páginas? ###

* O diretório `/pages` é responsável por controlar as páginas disponíveis no projeto
* Crie um novo arquivo `nome-da-pagina.js` (ou preferencialmente, duplique um existente) e automaticamente o sistemá irá criar uma rota para `http://localhost:3000/nome-da-pagina`
* O diretório `/data` é responsável pelo conteúdo de cada pagina. Duplique um arquivo e renomeie-o para `nome-da-pagina.js` e edite seu conteúdo com a sintaxe JSX, similar a HTML.
* Importe `../data/nome-da-pagina.js` dentro do arquivo `/pages/nome-da-página.js` na linha 3 da seguinte forma `import data from '../data/nome-da-pagina.js'` e o conteúdo aparecerá na página.

## Exportando o projeto para produção ##

* Edite o arquivo `next.config.js` e defina as rotas do seu projeto
```
		exportPathMap: function () {
		  return {
			'/': { page: '/' },
			'/nome-da-pagina': { page: '/nome-da-pagina' },
		  }
		}
```
* No terminal, rode `npm run export`
* Será criado o diretório `/out` contendo todos os arquivos necessários para rodar o projeto em produção. 

