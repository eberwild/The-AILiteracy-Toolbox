import knex from "knex";

// configure knex -> sql-data
const database = knex({
  client: "sqlite3",
  connection: {
    filename: process.env.DB_PATH  // path to db-file
  },
  useNullAsDefault: true // no errors for value Null
});

export default database;