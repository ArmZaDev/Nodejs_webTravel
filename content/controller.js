const collection = require('./model')

async function listContent(request, response) {

    const pugPath = `${__dirname}/views/home.pug`;
    response.render(pugPath);

    //const body = render(data);
    //response.send(body);
}

async function loginGet(req, res) {

    const pugPath = `${__dirname}/views/login.pug`;
    res.render(pugPath);
}

async function login(req, res) {

    try{
        const check = await collection.findOne({name:req.body.name})
        console.log(collection);

        if(check.password === req.body.password){
            const pugPath = `${__dirname}/views/home.pug`;
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


module.exports = {listContent, loginGet, login};