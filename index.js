const express = require("express");
//const morgan = require("morgan");
const contentRouter = require('./content');

const app = express();
const port = process.env.port|| 3030;

app.use(express.json())
app.set('view engine', 'pug')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
//app.use(morgan("common", { immediate: true}));

app.use('/content',contentRouter);

app.get('/', (request, response) => response.redirect('/content'));
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));