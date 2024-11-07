// Configuração do Banco de Dados
const { Sequelize } = require('sequelize');   // importando apenas o obeto sequelize 
require('dotenv').config(); //importa o dotenv


const sequelize = new Sequelize(process.env.DB_NOME, process.env.DB_USER, process.env.DB_PASS{   // olhar na documentação do sequelize p saber oq passar como parâmetro
    host: process.env.DB_HOST, 
    dialect: 'postgres'
});

module.exports = sequelize;