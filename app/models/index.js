const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize ");


db.sequelize.sync();

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host :dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases: false,
    pool : {
        max :dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle    : dbConfig.pool.idle

    }

});

const db ={}
db.Sequelize = Sequelize;
db.sequelize =sequelize;
// adding tutotial fromm model.js
db.tutorials =require("../models/tutorial")(sequelize,Sequelize);
module.exports =db;


