const  { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Import routes
const contactRoutes = require('./routes/contacts');

const app = express();

//middleware
app.use(cors())
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/contacts',contactRoutes)

module.exports = app;