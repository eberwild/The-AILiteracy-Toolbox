import knex from "knex";
import path from "path";

//const DBPath = path.resolve(process.env.DB_PATH);

// configure knex -> sql-data
const database = knex({
  client: "sqlite3",
  connection: {
    filename: './data/mydb.sqlite'  // path to db-file
  },
  useNullAsDefault: true // no errors for value Null
});

export default database;