const Sequelize = require('sequelize');

const configDB = require('../config/database');
const Produto = require('../models/produto');


const connection = new Sequelize(configDB);

Produto.init(connection); // Passing the database connection to Produto's class


////Produto.associate(connection.models);

module.exports = connection;