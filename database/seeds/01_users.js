
exports.seed = function(knex) {
    return knex('users').insert([
      {username: 'Austin1', password: 'Testing', department: 'seller'},
      {username: 'Matt1', password: 'Testing', department: 'seller'},
      {username: 'Hamida1', password: 'Testing', department: 'seller'},
      {username: 'Jonathan1', password: 'Testing',  department: 'seller'},
      {username: 'Austin2', password: 'Testing', department: 'buyer'},
      {username: 'Matt2', password: 'Testing', department: 'buyer'},
      {username: 'Hamida2', password: 'Testing', department: 'buyer'},
      {username: 'Jonathan2', password: 'Testing',  department: 'buyer'}
    ]);
};
