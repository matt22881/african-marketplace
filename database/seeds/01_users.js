
exports.seed = function(knex) {
    return knex('users').insert([
      {username: 'Melanie1', password: "Testing", department: "buyer"},
      {username: 'Bryan1', password: "Testing", department: "buyer"},
      {username: 'Nikki1', password: "Testing", department: "seller"},
      {username: 'Marcus1', password: "Testing",  department: "seller"},
      {username: 'KevDSims1', password: "Testing",  department: "seller"}
    ]);
};
