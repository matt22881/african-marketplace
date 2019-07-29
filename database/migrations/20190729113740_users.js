exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
  
      users
        .string('username', 128)
        .notNullable()
        .unique();
      users.string('password', 128).notNullable();
      users.string('department', 128)
    })
    .createTable('items', tbl => {
        tbl.increments();
        tbl.text('name');
        tbl.text('description');
        tbl.text('price');
        tbl.text('location');
        tbl.text('category');
        tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('items')
    .dropTableIfExists('users');
  };