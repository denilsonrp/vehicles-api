exports.up = function (knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments('id').primary();
    table.string('vehicle');
    table.string('brand');
    table.integer('year');
    table.text('description');
    table.boolean('sold').defaultTo(false);
    table.datetime('created').defaultTo(knex.fn.now());
    table.datetime('updated').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('vehicles');
};
