import database from "../database/knex.js";

export const findUserByEmail = (email) => {
  return database("users").where({ email }).first();
};

export const insertUser = (email, hashedPassword) => {
  return database("users").insert({
    email,
    password: hashedPassword
  });
};
