const {User, Tour} = require('./model');

//routing
//home view == index 
async function Content(request, response) {

    const pugPath = `${__dirname}/views/index.ejs`;
    response.render(pugPath);
}

//index => login => home
async function listContent(request, response) {

    const pugPath = `${__dirname}/views/home.ejs`;
    response.render(pugPath);

    //const body = render(data);
    //response.send(body);
}

//login view
async function loginGet(req, res) {

    const pugPath = `${__dirname}/views/login.ejs`;
    res.render(pugPath);
}

//login process
async function login(req, res) {
    try{
        const check = await User.findOne({name:req.body.name})

        if(check.password === req.body.password){
            const pugPath = `${__dirname}/views/home.ejs`;
            res.render(pugPath);
        }
        else{
            res.send('Wrong password!')
        }
    }
    catch{
        res.send('Wrong details')
    }
}

//signup view
async function signupGet(req, res){
    const pugPath = `${__dirname}/views/signup.ejs`;
    res.render(pugPath);
}

//signup process
async function signup(req, res) {
    const data = {
        name:req.body.name,
        password:req.body.password
    }

    await User.insertMany([data])

    const pugPath = `${__dirname}/views/home.ejs`;
    res.render(pugPath);
}

async function tour(req, res) {
    const pugPath = `${__dirname}/views/tour.ejs`;
    res.render(pugPath);
}

module.exports = {Content, listContent, loginGet, login, signupGet, signup, tour};