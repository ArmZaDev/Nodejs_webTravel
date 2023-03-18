let data = [
    { id: 1, title:'Australia', desc: ''},
    { id: 2, title:'New York', desc: ''},
    { id: 3, title:'Thailand', desc: ''}
    
];

function getAll() {
    return Promise.resolve(data);
}

module.exports = getAll;