
exports.seed = function(knex) {
    return knex('users').insert([
      {id: 10, username: 'Melanie', password: "Testing", department: "buyer"},
      {id: 7, username: 'Bryan', password: "Testing", department: "buyer"},
      {id: 8, username: 'Nikki', password: "Testing", department: "seller"},
      {id: 9, username: 'Marcus', password: "Testing",  department: "seller"},
      {id: 11, username: 'KevDSims', password: "Testing",  department: "seller"}
    ]);
};
