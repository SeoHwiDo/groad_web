const Sequelize = require('sequelize');
const Notice = require('./notice');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Notice = Notice;
db.User = User;

Notice.init(sequelize);
User.init(sequelize);

Notice.associate(db);
User.associate(db);

module.exports = db;