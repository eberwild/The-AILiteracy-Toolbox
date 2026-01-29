import database from "./knex.js";

// function to create the table User
const createTables = async () => {
  // check if the table already exists
  const exists = await database.schema.hasTable("users");
  if (!exists) {
    // if not -> create the table
    await database.schema.createTable("users", (table) => {
      table.increments("id").primary(); 
      table.string("email").notNullable().unique(); 
      table.string("password").notNullable(); 
      table.string("role").notNullable().defaultTo("user");
      table.timestamps(true, true);      // created_at & updated_at
    });
    console.log("Tabelle 'users' erstellt!");
  }
};

export default createTables;
