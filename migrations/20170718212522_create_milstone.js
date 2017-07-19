
exports.up = function(knex) {
  return knex.schema.createTable('milestones' (table) => {
      table.increments('id').primary();
      table.string('description');
      table.date('date_achieved');
      table.foreign('famous_people_id').references('famous_people');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('milestones')
};
