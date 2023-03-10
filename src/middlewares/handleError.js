const { UnauthorizedError } = require("express-jwt");
const { validationError } = require("express-validation");
const { ValidationError } = require("sequelize");

module.exports = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error);
    }
    if (error instanceof UnauthorizedError) {
        return res.status(error.status).json(error);
    } 
        
        return res.status(500).json(error);
    
};