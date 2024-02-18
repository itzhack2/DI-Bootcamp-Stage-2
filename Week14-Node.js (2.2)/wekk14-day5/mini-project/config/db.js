import knex from "knex";
export const db = knex ({
    client : 'pg',
    connection:{
        host:"localhost",
        port:5432,
        database:'postgres',
        user:"postgres",
        password:"123456",
    },
})
// console.log(db);