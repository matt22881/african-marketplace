const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  getItemsByUserId
};

function getItemsByUserId(id){
  return db('items').where({'items.user_id': id})
}

function find(department) {
  const query = db('users').select('id', 'username', 'department');
  if(department === 'seller'){
    return query
  } else if (department) {
    query.where({ department });
  }
  return query;
} 

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

