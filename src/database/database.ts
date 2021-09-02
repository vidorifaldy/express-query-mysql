/**
 * Configure database using class Database
 */
import mysql from "mysql";
import yaml from "yamljs";

const config = yaml.load("config.yaml");

var env = process.env.ENV || "development";

class Database {

  connection : any;

  constructor(config : any) {
    this.connection = mysql.createConnection({
      host: config[`${env}`].host,
      user: config[`${env}`].username,
      password: config[`${env}`].password,
      database: config[`${env}`].database,
      port: config[`${env}`].port,
      timezone: config[`${env}`].tz
    });
  }

  query(sql : any, args : any) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err: any, rows: unknown) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err: any) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

export default new Database(config);
