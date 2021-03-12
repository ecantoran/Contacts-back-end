const { Router } = require('express');
const router = Router();
const { getContacts, createContact, deleteContact, updateContact } = require('../controllers/index');

router.get('/', getContacts);

router.post('/', createContact);

router.put('/', updateContact);
router.delete('/', deleteContact)

module.exports = router;