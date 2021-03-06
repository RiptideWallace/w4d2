const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
const myArgs = process.argv[2]

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name = $1::text OR last_name = $1::text", [process.argv[2]] , (err, result) =>{
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    client.end();
  });
});