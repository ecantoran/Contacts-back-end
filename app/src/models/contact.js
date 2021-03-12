const { Sequelize } = require('sequelize')
const  sequelize  = require('../database/database')

const Contact = sequelize.define('contacts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    apellido: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    telefono: {
        type: Sequelize.TEXT
    },
    avatar: {
        type: Sequelize.TEXT
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }

}, {
    timestamps: false
});


module.exports = Contact;