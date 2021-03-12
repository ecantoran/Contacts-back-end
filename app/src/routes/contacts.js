const { Router } = require('express');
const router = Router();
const { getContacts, createContact, deleteContact, updateContact } = require('../controllers/index');

router.get('/', getContacts);

router.post('/', createContact);

router.put('/:id', updateContact);
router.delete('/:id', deleteContact)

module.exports = router;