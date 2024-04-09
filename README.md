# E-commerce-back-end
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
    This is a back end application for an e-commerce site. It uses Express.js API and configures it to use Sequelize to interact with a MYSQL database. 
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Walkthrough](#walkthrough)
- [Questions](#questions)
## Installation
    In order to run this application, you will need to follow a few steps. First, create a .env file with your login credentials for MYSQL. You will need to include DB_NAME, DB_USER, and DB_PASSWORD. Note that the DB_NAME is ecommerce_db as named in the schema.sql file. After creating a .env file, you will need to run the schema.sql file within the db directory. In the terminal, type "mysql -u root -p" and enter your login credentials. Then run the schema.sql file in the mysql shell. After this, seed the database by running "node seeds/index.js" within the terminal and finally start the server by entering "node server.js". 
## Usage
    This is a backend application, so you will need to use an API testing or development tool such as postman or insomnia. Routes are labeled in each route file and use the models as a reference when creating post requests in json format. 
## License
The license for this project is MIT
https://opensource.org/license/mit/

## Walkthrough 
Here is a walkthrough video that goes through how to start the application as well as all of the test routes: https://drive.google.com/file/d/1u_F5y-vA1gyzPs7KOyJQcIcPhOH2II3K/view 


## Questions
  Contact me at benita.isaac@gmail.com if you have any other questions. Github: 
[https://github.com/benitaisaac](https://github.com/benitaisaac)
    