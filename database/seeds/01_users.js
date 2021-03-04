
exports.seed = function(knex) {
    return knex('users').insert([
      {username: 'testseller', password: 'selling', department: 'seller'},
      {username: 'testbuyer', password: 'buying',  department: 'buyer'}
    ]);
};
