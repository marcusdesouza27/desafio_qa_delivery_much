# Desafio Delivery Much

Repositório com testes automatizados realizados em Cypress  para o desafio da Delivery Much

---

## Índice

- [Pre Requisitos](#pre-requisitos)
- [Instalacao](#instalacao)
- [Como Testar](#como-testar)
- [Suporte](#suporte)

---

## Pre Requisitos

- [Instalar Node.js 14+](https://nodejs.org/)

>Instalar Allure:
* [MacOS](https://docs.qameta.io/allure/#_mac_os_x): `brew install allure`
* [Windows](https://docs.qameta.io/allure/#_windows): `scoop install allure`
* [Linux](https://docs.qameta.io/allure/#_linux):
    - `sudo apt-add-repository ppa:qameta/allure`
    - `sudo apt-get update`
    - `sudo apt-get install allure`

## Instalacao

> Clonar o projeto

`https://github.com/marcusdesouza27/desafio_qa_delivery_much.git`

>Acessar o diretório desafio_qa_delivery_much:

`cd ../desafio_qa_delivery_much`

> Instalar dependências:

`npm ci`

---

## Como Testar:

> Executar os testes:

`npm run test`

> Executar a geração de relatório:

- Executar a seqüência de comandos abaixo:
* `npm run allure:clean`
* `npx cypress run --env allure=true`
* `npm run allure:generate`
* `npm run allure:open`
---

## Suporte

- Linkedin: <a href="https://www.linkedin.com/in/marcusdesouza27/" target="_blank">`Marcus Souza`</a>

- E-mail: `marcusdesouza27@gmail.com`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="https://www.linkedin.com/in/marcusdesouza27/" target="_blank">`Marcus Souza`</a>.
