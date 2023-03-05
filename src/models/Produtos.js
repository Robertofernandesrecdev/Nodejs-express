
const db = require("../database");
const { DataTypes } = require('sequelize');
const Fabricantes = require("./Fabricantes");

// montar de acordo com a tabela 
const Produtos = db.define("Produtos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    preco: {
        type: DataTypes.FLOAT,
    },
    quantidade: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    fabricantes_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Fabricantes,
            Key: 'id',
        },
    },
},
    {
        tableName: "produtos",
    }

);

module.exports = Produtos;