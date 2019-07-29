const db = require("../database/dbConfig.js");

module.exports = {
  getItems,
  addItem,
  getItemsById,
  updateItem,
  deleteItem
};

function getItems() {
  return db("items");
}

function addItem(item) {
  return db("items").insert(item, "id");
}

function getItemsById(id) {
  return db("items")
    .where({ id })
    .first();
}

function updateItem(id, changes) {
  return db("items")
    .where({ id })
    .update(changes);
}

function deleteItem(id) {
  return db("items")
    .where({ id })
    .del();
}