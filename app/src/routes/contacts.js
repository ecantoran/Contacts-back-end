const { Router } = require('express');
const router = Router();
const { getContacts, createContact, deleteContact, updateContact } = require('../controllers/index');

router.get('/list', getContacts);

router.post('/create', createContact);

module.exports = router;