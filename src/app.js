 // ** criar um projeto node ** 
/**  instalar o express e criar um servidor com uma resposta no "/" ** */
// rodar o projeto com node app.js

// Nodemoon configura os scripst para rodar o projeto e deixar autoreload
// Toda vez que alterar o arquivo ele vai atualizar o servidor automaticamente.
// Npm install nodemon -D só instalar como dependência de desenvolvimento.
// para rodar nodemon app.js  ou seja roda o servidor 
// pode também criar um script no package.json   "scripts": { "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node app.js",
//     "dev": "nodemon app.js"
//   }, agora roda com npm run dev


const express = require("express"); 
const routes = require('./routes') // importando rota 
const db = require("./database");

const app = express();

db.hasConection();

// é importante que esteja antes das rotas, para o servidor identificar que estamos trabalhando com json! 
app.use(express.json());

app.use(routes);
// retorna uma resposta no formato de texto!
// app.get("/", (req, res) => {
//     res.send("Olá Mundo..");
// })

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));  


// Sequelize orm para manipular o banco de dados principalmente bancos relacionais 
// sequelize.org documentação 
// npm install –-save sequelize
// npm install –-save mysql2 
// pode instalar os dois de uma vez npm install sequelize mysql2
