const express = require("express");
const router = express.Router();
const {Content, listContent, loginGet, login, signupGet, signup, tour, tours} = require('./controller');

//home route
router.get('/', Content); //index
router.get('/home', listContent); //home

//login route
router.get('/login', loginGet);
router.post('/home/login', login);

//signup route
router.get('/signup', signupGet);
router.post('/signup', signup);

//tour
router.get('/tour/:id', tour);

module.exports = router;