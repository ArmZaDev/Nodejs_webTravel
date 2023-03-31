const express = require("express");
const router = express.Router();
const {listContent, loginGet, login} = require('./controller');

router.get('/', listContent);
router.get('/login', loginGet);
router.post('/login', login);

module.exports = router;