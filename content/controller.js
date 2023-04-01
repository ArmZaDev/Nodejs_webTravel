const collection = require('./model')

//routing
//home view
async function listContent(request, response) {

    const pugPath = `${__dirname}/views/home.ejs`;
    response.render(pugPath);

    //const body = render(data);
    //response.send(body);
}

//login view
async function loginGet(req, res) {

    const pugPath = `${__dirname}/views/login.pug`;
    res.render(pugPath);
}

//login process
async function login(req, res) {

    try{
        const check = await collection.findOne({name:req.body.name})
        console.log(collection);

        if(check.password === req.body.password){
            const pugPath = `${__dirname}/views/index.ejs`;
            res.render(pugPath);
        }
        else{
            res.send('Wrong password!')
        }
    }
    catch{
        res.send('wrong details')
    }
}

//signup view
async function signupGet(req, res){
    const pugPath = `${__dirname}/views/signup.pug`;
    res.render(pugPath);
}

//signup process
async function signup(req, res) {
    const data = {
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    const pugPath = `${__dirname}/views/home.pug`;
    res.render(pugPath);
}


module.exports = {listContent, loginGet, login, signupGet, signup};