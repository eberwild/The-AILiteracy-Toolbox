import database from "./knex.js";

// create user table
export const createTables = async () => {
  // check if the table already exists
  const userExists = await database.schema.hasTable("users");
  if (!userExists) {
    // if not -> create the table
    await database.schema.createTable("users", (table) => {
      table.increments("id").primary(); 
      table.string("email").notNullable().unique(); 
      table.string("password").notNullable(); 
      table.string("role").notNullable().defaultTo("user");
      table.boolean("verified").notNullable().defaultTo(false);
      table.timestamps(true, true);      // created_at & updated_at
    });
    console.log("Table users created.");
  }

  // create blackboard table
  const blackboardExists = await database.schema.hasTable("blackboard");
  if (!blackboardExists) {
    
    await database.schema.createTable("blackboard", (table) => {
      table.increments("id").primary(); 
      table.string("email").notNullable().unique(); 
      table.string("text").notNullable();
      table.timestamps(true, true);      
    });
    console.log("Table blackboard created.");
  }

  // create tools table
  const toolsExists = await database.schema.hasTable("tools");
  if (!toolsExists) {
    
    await database.schema.createTable("tools", (table) => {
      table.increments("id").primary(); 
      table.string("email").notNullable().unique(); 
      table.string("text").notNullable();
      table.timestamps(true, true);      
    });
    console.log("Table blackboard created.");
  }
};

