
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'eggs', description: "seed testing data", price: 3, location: "Sauti", category: "Animal Products", user_id: 1},
        {id: 2, name: 'beans', description: "seed testing data", price: 4, location: "South Africa", category: "Beans", user_id: 2},
        {id: 3, name: 'Dry Maize', description: "seed testing data", price: 12, location: "Niger", category: "Cereals-Maize", user_id: 3},
        {id: 4, name: 'Barley', description: "seed testing data", price: 5, location: "Lobito", category: "Cereals-Other", user_id: 4},
        {id: 5, name: 'Wheat Bran', description: "seed testing data", price: 7, location: "Kinshasa", category: "Cereals-Rice", user_id: 1},
        {id: 6, name: 'Avacados', description: "seed testing data", price: 8, location: "Luanda", category: "Fruits", user_id: 2},
        {id: 7, name: 'Coffee(Arabic)', description: "seed testing data", price: 3, location: "Juba", category: "Coffee", user_id: 3},
        {id: 8, name: 'Chic Pea', description: "seed testing data", price: 9, location: "Cape Town", category: "Peas", user_id: 4},
        {id: 9, name: 'Cassava Chips', description: "seed testing data", price: 6, location: "Beira", category: "Roots & Tubers", user_id: 2},
        {id: 10, name: 'Ground Nuts', description: "seed testing data", price: 6, location: "Juba", category: "Seeds & Nuts", user_id: 4},
        {id: 11, name: 'Cabbages', description: "seed testing data", price: 9, location: "Sauti", category: "Vegtables", user_id: 1}
      ]);
    });
};
