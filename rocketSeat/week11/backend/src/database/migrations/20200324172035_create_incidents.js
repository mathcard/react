exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments(); // pk
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();    
    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs'); //fk
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};