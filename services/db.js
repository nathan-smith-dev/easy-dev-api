const pg = require('pg');
require('pg-camelcase').inject(pg);

const client = new pg.Client({
    connectionString: process.env.DB_CONNECTION_STRING,
});

function connect() {
    client.connect();
}

async function getUser(id) {
    const query = {
        text: 'SELECT * FROM get_user($1)',
        values: [id],
    };

    const result = await client.query(query);
    if (result.rows[0].id) {
        return result.rows[0];
    }
    return null;
}

async function createUser(id, email, firstName, lastName) {
    const query = {
        text: 'SELECT * FROM create_user($1, $2, $3, $4)',
        values: [id, email, firstName, lastName],
    };

    const result = await client.query(query);
    return result.rows[0];
}

module.exports = {
    getUser,
    createUser,
    connect,
};
