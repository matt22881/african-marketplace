
exports.seed = function(knex) {
    return knex('users').insert([
      {id: 1, username: 'Melanie', password: "Testing", department: "buyer"},
      {id: 2, username: 'Bryan', password: "Testing", department: "buyer"},
      {id: 3, username: 'Nikki', password: "Testing", department: "seller"},
      {id: 4, username: 'Marcus', password: "Testing",  department: "seller"}
    ]);
};
