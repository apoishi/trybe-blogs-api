# Blogs API

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />
  
## :page_with_curl: About

This is the sixth project of the Back-end curriculum developed at Trybe.

In this project I developed a RESTful API and a database for the production of content for a blog, using the MSC (Model-Service-Controller) architecture, where it is possible to create, view, delete and update posts, categories and users. The connection to the database was made with ORM Sequelize and authentication with Json Web Token.

<br />
  
## 🚀 Installation

<details>
<summary>Installing and running with Docker</summary>
<br />

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your computer. Docker Compose needs to be version **1.29** or higher.

### 1 - Clone the repository:

```
git clone git@github.com:apoishi/trybe-blogs-api.git
```

### 2 - Enter the repository folder you just cloned and use docker-compose to create the container:

     cd trybe-blogs-api

     docker-compose up -d --build

### 3 - Open the `blogs-api` container terminal.

     docker exec -it store_manager bash

### 4 - In the terminal of the container, install the dependencies with the command:

     npm install

### 5 - Create and populate the database with the commands:

creating the tables

    npm run prestart

Populating the database with data

     npm run seed
    
### 6 - Run the application with the command:

     npm start

### 7 - Check the test coverage run the command:

   npm run test-coverage
    
</details>
<br />

## :man_technologist: Skills

- Create and associate tables using sequelize models;
- Build endpoints to manipulate the information in the database;
- Authenticate users through JWT;

<br />

## 🚂 Routes
  
### Login
  
  <details>
   <summary><strong>POST /login</strong></summary>
   </br>
   • If the login was successful, it returns a token to the user.
</details>


### User
  
<details>
   <summary><strong>POST /user</strong></summary>
   </br>
   • Register a new user in the database.
</details>

<details>
   <summary><strong>GET /user</strong></summary>
   </br>
   • Return all users from the database.
   
   • Validate the token.  
</details>

<details>
   <summary><strong>GET /user/:id</strong></summary>
   </br>
   • Return an user by id from the database.
   
   • Validate the token.
</details>

### Post

<details>
   <summary><strong>GET /post</strong></summary>
   </br>
   • Return all posts from the database.
   
   • Validate the token.  
</details>

<details>
   <summary><strong>GET /post/:id</strong></summary>
   </br>
   • Return a post by id from the database.
   
   • Validate the token.
</details>

<details>
   <summary><strong>POST /post</strong></summary>
   </br>
   • Register a new post in the database.
   
   • Validate the token.
</details>

<details>
   <summary><strong>PUT /post/:id</strong></summary>
   </br>
   • Update a post by id in the database.
   
   • Validate the token.
</details>

### Category

<details>
   <summary><strong>GET /category</strong></summary>
   </br>
   • Return all categories from the database.
   
   • Validate the token.  
</details>

<details>
   <summary><strong>POST /category</strong></summary>
   </br>
   • Register a new category in the database.
   
   • Validate the token. 
</details>

<br />

## :hammer_and_wrench: Tools

* Node
* Express
* Sequelize
* Json Web Tokens
* DotEnv
* Joi
* Docker
* MySQL
* Javascript

</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />
  
## :page_with_curl: Sobre

Esse é o sexto projeto desenvolvido na Trybe do módulo de Back-end.

Nesse projeto desenvolvi uma API RESTful e um banco de dados para a produção de conteúdo para um blog, utilizando a arquitetura MSC (Model-Service-Controller), onde é possivel criar, visualizar, deletar e atualizar posts, categorias e usuários. A conexão com o banco de dados foi feita com o ORM Sequelize e a autenticação com Json Web Token.
  
<br />

## 🚀 Instalação e execução

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório:

```
git clone git@github.com:apoishi/trybe-blogs-api.git
```

### 2 - Entre na pasta do repositório que você acabou de clonar e use o docker-compose para subir o container:

    cd trybe-blogs-api   
    docker-compose up -d --build

### 3 - Abra o terminal do container `store_manager`.

    docker exec -it store_manager bash

### 4 - No terminal do container, instale as dependências com o comando:

    npm install

### 5 - Agora execute os comandos para criar e popular o banco de dados:

Criando as tabelas

    npm run prestart

Populando o banco com dados

    npm run seed
    
### 6 - Execute a aplicação com o comando:

    npm start

### 7 - Para conferir a cobertura de testes execute o comando:

  npm run test-coverage
    
</details>
<br />

## :man_technologist: Habilidades

- Criar e associar tabelas usando models do sequelize;
- Construir endpoints para manipular as informações no banco de dados;
- Autenticar usuários através do JWT;


<br />

## 🚂 Rotas

### Login
  
  <details>
   <summary><strong>POST /login</strong></summary>
   </br>
   • Caso o login tenha sido efetuado com sucesso retorna um token para o usuário.
</details>


### User
  
<details>
   <summary><strong>POST /user</strong></summary>
   </br>
   • Registra um novo usuário no banco de dados.
</details>

<details>
   <summary><strong>GET /user</strong></summary>
   </br>
   • Retorna todos os usuários do banco de dados.
   
   • Faz a validação do token.  
</details>

<details>
   <summary><strong>GET /user/:id</strong></summary>
   </br>
   • Retorna do banco de dados um usuário através do id.
   
   • Faz a validação do token.
</details>

### Post

<details>
   <summary><strong>GET /post</strong></summary>
   </br>
   • Retorna todos os posts do banco de dados.
   
   • Faz a validação do token.  
</details>

<details>
   <summary><strong>GET /post/:id</strong></summary>
   </br>
   • Retorna do banco de dados um post através do id.
   
   •Faz a validação do token.
</details>

<details>
   <summary><strong>POST /post</strong></summary>
   </br>
   • Registra um novo post no banco de dados.
   
   • Faz a validação do token.
</details>

<details>
   <summary><strong>PUT /post/:id</strong></summary>
   </br>
   • Atualiza um post no banco de dados.
   
   • Faz a validação do token.
</details>

### Category

<details>
   <summary><strong>GET /category</strong></summary>
   </br>
   •  Retorna todos os posts do banco de dados.
   
   • Faz a validação do token.  
</details>

<details>
   <summary><strong>POST /category</strong></summary>
   </br>
   •  Registra uma nova categoria no banco de dados.
   
   • Faz a validação do token. 
</details>


## :hammer_and_wrench: Ferramentas

* Node
* Express
* Sequelize
* Json Web Tokens
* DotEnv
* Joi
* Docker
* MySQL
* Javascript

</details>
