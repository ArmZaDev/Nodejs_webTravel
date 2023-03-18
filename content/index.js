const express = require("express");
const router = express.Router();

const listContent = require('./controller');

router.get('/', listContent);

module.exports = router;