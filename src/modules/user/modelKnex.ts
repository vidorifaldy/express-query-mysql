import knex from 'knex';

let config = {
  client: 'mysql',
    connection: {
      port: 3306,
      host: 'localhost',
      user: 'root',
      password: 'P@ssw0rd@2020!',
      database: 'ebalita_dev',
      timezone: 'UTC',
    }
}

module.exports = {
  table: 'user',
  execQuery: knex(config),
};