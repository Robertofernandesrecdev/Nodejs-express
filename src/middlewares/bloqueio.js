// validação para  bloquear o acesso na estrutura de parametros
// Só vai passar se na url for passado ok
//http://localhost:3000/produtos?pass=ok só passa se o parametro for passado corretamente 

module.exports = (req, res, next) => {
    const { pass } = req.query;

    if (!pass || pass !== "ok") {
        return res.status(400).json("Entrada valor errado");
    }
    next();
}