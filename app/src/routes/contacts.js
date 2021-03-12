const { Router } = require('express');
const router = Router();
const { getContacts } = require('../controllers/index')

router.get('/list', getContacts);
module.exports = router;