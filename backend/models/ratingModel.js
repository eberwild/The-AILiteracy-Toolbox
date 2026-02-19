import database from '../database/knex.js';

export const insertRating = (rating , id) => {
    return database('ratings').insert({
        stars: rating ,
        tool_id: id
    })
}