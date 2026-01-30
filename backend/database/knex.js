import knex from "knex";
import path from "path";

const dataBasePath = path.resolve("./data/mydb.sqlite");

// configure knex -> sql-data
const database = knex({
  client: "sqlite3",
  connection: {
    filename: dataBasePath  // path to db-file
  },
  useNullAsDefault: true // no errors by value Null
});

export default database;