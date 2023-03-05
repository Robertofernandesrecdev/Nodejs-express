// configuração com o banco 
// 
const Sequelize = require("sequelize");

const DB_NAME = "loja"; //nome do banco de dados 
const DB_USER = "root"; //usuário do banco de dados 
const DB_PASS = "";     // senha 
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

// objeto para guardar a conexão do banco de dados 
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error ao tentar se conectar com o banco de dados.");
}


async function hasConection() {
    try {
        await db.authenticate();
        console.log("Banco conectado!");
    } catch (error) {
        console.error("Erro ao tentar se conectar ao banco");
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db;

//importar o db no servidor app.js