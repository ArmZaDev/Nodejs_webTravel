const express = require("express");
const router = express.Router();
const {Content, listContent, loginGet, login, signupGet, signup, tour, logout} = require('./controller');

//home route
router.get('/', Content); //index
router.get('/home', listContent); //home

//login route
router.get('/login', loginGet);
router.post('/login', login);

//logout route
router.get('/logout', logout);

//signup route
router.get('/signup', signupGet);
router.post('/signup', signup);

//tour
router.get('/tour/:id', tour);

module.exports = router;