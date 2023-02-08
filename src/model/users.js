module.exports = function () {

    let db = require('../libs/db-connection.js')

    let Schema = require('mongoose').Schema

    let User = Schema({
        nombre: String,
        nombreusuario: String,
        email: String,
    });

    return db.model('user', User)

}   

