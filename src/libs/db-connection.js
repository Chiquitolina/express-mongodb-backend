const mongoose = require('mongoose')

let db;

module.exports = function Connection () {
    if (!db) {
        mongoose.connect('mongodb://localhost/eexpress-mongo-crud')
    }
    return db
}