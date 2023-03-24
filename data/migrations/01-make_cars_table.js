exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();

    table.string('car_id', 20).notNullable().unique()

    table.string('make', 128).notNullable()
  })
  // DO YOUR MAGIC
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
  // DO YOUR MAGIC
};
