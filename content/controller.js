const {User, Tour, getAll, get} = require('./model');

//routing
//home view == index 
async function Content(request, response) {
    const tours = await getAll();
    const pugPath = `${__dirname}/views/index.ejs`;
    response.render(pugPath,{tours:tours});
}

//index => login => home
async function listContent(request, response) {
    const tours = await getAll();
    const pugPath = `${__dirname}/views/home.ejs`;
    response.render(pugPath,{tours:tours});

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
            const tours = await getAll();
            const pugPath = `${__dirname}/views/home.ejs`;
            res.render(pugPath,{tours:tours});
        }
        else{
            res.send('Wrong password!')
        }
    }
    catch{
        res.send('Wrong details')
    }
}

//logout
async function logout(req, res) {
    const tours = await getAll();
    const pugPath = `${__dirname}/views/index.ejs`;
    res.render(pugPath,{tours:tours});
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
    const tour_id = req.params.id;
    const tours = await get({_id:tour_id});

    const pugPath = `${__dirname}/views/tour.ejs`;
    res.render(pugPath,{tour:tours});

    console.log(tour_id);
}

module.exports = {Content, listContent, loginGet, login, signupGet, signup, tour, logout};