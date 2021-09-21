# RESTful API Computer Inventory App

<p align="center"> 
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>
<p align="center">
  <a href="https://www.mysql.com/">
    <img alt="database" title="database management" src="https://seeklogo.net/wp-content/uploads/2012/03/mysql-vector1.jpg">
  </a>
</p>

---- 
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [License](#license)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- express.js - Download and Install [express.js](https://expressjs.com/) Fast, unopinionated, minimalist web framework for Node.js.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.
- Code Editor - Download and Install [VS Code](https://code.visualstudio.com/Download) - Code editor that i use to create this project.
- XAMPP - Download and Install [XAMPP](https://www.apachefriends.org/download.html) - XAMPP is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages. So, i don't need to install mysql anymore.

## Installation
### Clone
```
$ git clone https://github.com/Ertilu/restful-api-inventory-app.git
$ cd restful-api-inventory-app
$ npm install
```
## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#create-environment-variable)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name db_inventory, and Import file [db_inventory](db_inventory.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/notes)
8. You can see all the end point [here](#documentation)

### Create Environment Variable
```
$ cp .env.example .env
$ nano .env
```

```
PORT=3000

HOST=localhost
USER=root // default
PASS= // default
DATABASE=db_inventory

```
### Start Development Server
```
$ npm start
```

## Documentation

### USER Routes

#### POST Request
```
 1. "/user/register" => Create user and return token. 
    a. Required Body: 
       1) name: string
       2) username: string
       3) email: string
       4) password: string
       5) * date_created and date_updated: (auto created)

 2. "/user/login" => Log In user and return token. 
    a. Required Body:
       1) username: string
       2) password: string
```

#### GET Request
```
 1. "/user" => User page. 
Display welcome "your name"
```


### PRODUCT Routes

#### GET Request
```
 1. "/product?input=" => Display products, with default pagination {page: 1, limit: 4}. 
    a. Possible Query:
       1) search -> {input: column name}, search products that have {input} in their title according to product name in the database.
       2) sortby -> {input: column name or category or quantity or date updated}, sort products based on {input}.
       3) sort   -> {input: asc / desc}, sort products ascending or descending based on {input}.
       4) page	 -> {input: number}, display page based on {input} **note: you must correct value number**.
       5) limit  -> {input: number}, config how many product displayed on page **note: you must correct value number**.

 2. "/product?name=" => Display product with {name} according user input name.
```

#### POST Request
```
 1. "/product" => Create product and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: 
       1) pName: string
       2) pDesc: string
       3) pImage: string //image url
       4) idCategory: number
       5) pQty: number
       *) date created and updated: (auto created)
```

#### PUT Request
```
 1. "product/{id}" => Update product with {id} and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: 
       1) pName: string
       2) pDesc: string
       3) pImage: string //image url
       4) idCategory: number
       5) pQty: number
        *) date created and updated: (auto created)
 ```

#### PATCH Request
```
 1. "/product" => Add or reduce product quantity according to name that user input in required body.
    a. Required Header : { auth: token }
    b. Required Body: { operation: add / reduce, pName: product that you want add.reduce, pQty: how many quantity that you want add/reduce }
```

#### DELETE Request
```
  1. "product/id" => Delete product with id according to id in required paramaeter.
    a. Required Header : { auth: token }
    b. Required Parameter: { id: what product that you want to delete }
```


### CATEGORY Routes

#### GET Request
```
 1. "category" => Display categories. 

```

#### POST Request
```
 1. "category" => Create category and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: { name: string }
```

#### PUT Request
```
1. "category" => Update category with id in reques body and return inserted data.
    a. Required Header: { auth: token }
    b. Required Body: { id: what category that you want to update, name: string }
```

#### DELETE Request
```
 1. "category" => Delete category with id in request body.
```


### License
----
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")
