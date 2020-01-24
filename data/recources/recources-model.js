const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development)

module.exports = {
    find,
    add
};

function find(){
    return db('recources')
};

function add (recource){
    return db('recources')
        .insert(recource, 'id')
        .then(ids => ({ id: ids[0] }))
}
