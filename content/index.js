const express = require("express");
const router = express.Router();
const {listContent, loginGet, login, signupGet, signup} = require('./controller');

//home route
router.get('/', listContent);

//login route
router.get('/login', loginGet);
router.post('/login', login);

//signup route
router.get('/signup', signupGet);
router.post('/signup', signup);

module.exports = router;