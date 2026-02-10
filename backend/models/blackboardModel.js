import database from "../database/knex.js";

export const getAllEntries = () => {
    return database("blackboard").select("*").where({ reviewed: false });
}

export const createEntry = (email , message) => {
    return database("blackboard").insert({
        email,
        message
    });
}