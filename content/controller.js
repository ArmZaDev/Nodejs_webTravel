const home = require('./model')

async function listContent(request, response) {

    const pugPath = `${__dirname}/views/home.pug`;
    response.render(pugPath);

    //const body = render(data);
    //response.send(body);
}


module.exports = listContent;