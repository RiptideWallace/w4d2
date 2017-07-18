const settings = require("./settings");

const knex = require("knex") ({
  client: 'pg',
  connection: {
    user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname
  }
});

knex('famous_people').insert({first_name: process.argv[2],
  last_name: process.argv[3],
  birthdate: process.argv[4]}).asCallback((err, result) =>{
if (err) {
    return console.error("error running query", err);
  }
  console.log(result.rows);
});
