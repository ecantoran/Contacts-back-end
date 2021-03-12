const  { json } = require('express');
const express = require('express');
const morgan = require('morgan');

// Import routes
const contactRoutes = require('./routes/contacts');

const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/contacts',contactRoutes)

module.exports = app;