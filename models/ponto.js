const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Ponto = sequelize.define('Ponto', { // Sequelize  você pode manipular os dados usando objetos e métodos, sem precisar escrever SQL diretamente.   // crie modelos (classes) em TypeScript ou JavaScript que representam as tabelas do seu banco de dados.
        id_ponto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true  //o valor desse campo será gerado automaticamente pelo banco de dados. Toda vez que um novo registro for inserido, o banco atribuirá um número inteiro sequencial, começando geralmente de 1 e aumentando de um em um (1, 2, 3, etc.), sem que o desenvolvedor precise fornecer esse valor.
        },
        tipo: {
            type: DataTypes.ENUM('entrada', 'saida', 'intervalo', 'volta'),   // Enum da um conjunto de opções pré-definidas
            allowNull: false  // n vai pode ser nulo ( not null)
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        anexo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        passado: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        dataHora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        localizacao: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, 
    {
        timestamps: true
    }
);

module.exports = Ponto;