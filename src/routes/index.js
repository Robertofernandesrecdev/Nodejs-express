// importar o express 

const express = require('express');
const produtoController = require('../controller/produtoController');
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const authLoginValidation = require("../validations/auth/login");
const usuarioCreateValidation = require("../validations/usuarios/create");
const authController = require("../controller/authController");
const usuariosController = require("../controller/usuariosController"); 
const auth = require("../middlewares/auth");


// todos os métodos ficaram disponíveis dentro de routes!
const routes = express.Router();

//Chamando o metodo de controller onde vão ficar responsavel pelas rotas
// A rota fica com a responsabilidade de direcionar para qual controller ela vai usar!
//importa o requestLog e chama antes do produtoController. 
routes.get("/produtos", requestLog, bloqueio, produtoController.listarProduto);
routes.post("/produtos", auth, produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
routes.post("/login", authLoginValidation, authController.login);
// routes.get("/", (req, res) => {
//     console.log(req.query); //informações passada via url por query string evitar usar com informações sigilosas. 
//     // exemplo de como passar http://localhost:3000/?nome=Roberto&email=email@email.com o & divide o que vc quer passar.
//     res.send("hello Word 3000!");
// });

//rotas de produtos com parametro que vou receber do req.params! Rotas parametrizadas tem por obrigação passar
//os parametros senão gera erro! Como passa no isominia get http://localhost:3000/produto/1
//** ao colocar o ? está dizendo que o parametro é opcional. "/produto/:id?" pode tambémm,
 /*  colocar outros parametros como categoria do produto "/produto/:id/categoria" 
//  get http://localhost:3000/produto/1/1  produto, id e categoria   */
// routes.get("/produto/:id?", (req, res) => {
//     console.log(req.params);  
//     res.send("oi");
// });
// precisa importar as rotas lá no app.js

// //rotas post, put, delete testar com isominia ou postman
// routes.post("/cadastrar", (req, res) => {
//     console.log(req.body);
//     res.json(req.body);  // retorna o que foi passado! 
//    // res.send("Cadastrei um produto");
// });

module.exports = routes;