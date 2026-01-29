import knex from "knex";

// configure knex -> sql-data
const database = knex({
  client: "sqlite3",
  connection: {
    filename: "./backend/db/data.db" // path to db-file
  },
  useNullAsDefault: true // no errors by value Null
});

export default database;