var Pool = require('pg').Pool;

const NEW_POOL = new Pool({
    user: "postgres",
    password: "Mwf3to6_2021",
    host: "localhost",
    port: 5432,
    database: "test"
});

module.exports = NEW_POOL;