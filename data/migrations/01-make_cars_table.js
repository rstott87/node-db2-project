exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments(); //note: can be left empty **important
    tbl.string('vin', 17)
      .unique()
      .notNullable();
    tbl.string('make', 128)
      .notNullable();
    tbl.string('model', 28)
    .notNullable();
    tbl.decimal('mileage')
    .notNullable();
    tbl.string('title'), 128;
    tbl.string('transmission');
})
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
