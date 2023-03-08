// importar os dois models 
const Fabricantes = require("./Fabricantes");
const Produtos = require("./Produtos");
const Usuarios = require("./Usuario");

Produtos.belongsTo(Fabricantes, {
    foreignKey: "fabricantes_id",
});

Fabricantes.hasMany(Produtos, {
    foreignKey: "fabricantes_id",
});



module.exports = {
    Fabricantes,
    Produtos,
    Usuarios,

};