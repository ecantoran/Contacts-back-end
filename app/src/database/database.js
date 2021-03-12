const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('contactos', 'postgres', 'CONTACT2021', {
    host: 'db',
    dialect: 'postgres',
});
async function test_db(){
    try {
       await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
test_db();

module.exports = sequelize;