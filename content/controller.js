const getAll = require('./model');
const render = require('./view');

async function listAction(request, response){
    const data = await getAll();
    const body = render(data);
    response.send(body);
}

module.exports = listAction;