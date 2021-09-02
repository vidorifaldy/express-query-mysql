import knex from 'knex';
import { configure } from './configModel';
import { Configures } from '../../database/databaseKnex';

module.exports = {
  table: 'master_bidang',
  execQuery: knex(Configures),
};

// module.exports = function() {
//   let data = {
//     table: 'user',
//     execQuery: knex(configure)
//   }
//   return data
// };