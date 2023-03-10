const { Usuarios } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");


const AuthController = {

    async login(req, res) {
        const { email, senha } = req.body;

        const usuario = await Usuarios.findOne({
            where: {
                email,
            },
        });

        if (!usuario) {
            return res.status(400).json("Email não cadastrado!");
        }

        if (!bcrypt.compareSync(senha, usuario)) {
            return res.status(401).json("Senha inválida");
        }

        // com isso o jwt vai devolcer um token 
        const token = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome,
        },
        secret.key
        );

        //return res.json("Logado");
        return res.json(token);
    },

    
};


module.exports = AuthController;