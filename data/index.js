const Sequelize = require('sequelize');
const config = require('../config.json');

const sequelize = new Sequelize(config.db, null, null, {
    dialect: config.dialect,
    storage: config.storage,
});

const Repo = require('./repo')(Sequelize, sequelize);
const Commit = require('./commit')(Sequelize, sequelize);

Commit.belongsTo(Repo, { foreignKey: 'repoId', onDelete: 'cascade' });

const context = {
    repos: Repo,
    commits: Commit,

    Sequelize,
    sequelize,
};

module.exports = context;