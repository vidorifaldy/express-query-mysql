import express, {Application, Request, Response} from 'express';
import http from 'http';
import yaml from "yamljs";
import cors from "cors";
import morgan from 'morgan';
import routes from './router/routes'
// import {apps} from './router/routes'
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
import multer from 'multer';
import fileUpload from 'express-fileupload';
// var multer  = require('multer')


require('dotenv').config();

const config = yaml.load("config.yaml");

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));

const knex = require('knex')({
  client: 'mysql',
  connection: {
      host: '10.14.20.14',
      user: 'root',
      password: 'P@ssw0rd@2020!',
      database: 'ebalita_dev'
  },
  debug: true
});

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
import userController from "./src/modules/user/controller";

app.get('/buku', async (req, res ) => {
  try {
      let buku = await knex('view_user_login').where({"username" : 'superadmin'});
      res.json(buku)
  } catch (e) {
      console.log(e);
  }
})
// app.get('/', (req: Request, res: Response) => {
//   userController.findAll(req,res)
// })
app.use(config.middleurl, routes)

app.set("port", config.port);
// routes.initialize(app);

const server = http.createServer(app);

server.listen(app.get("port"), function () {
  let env = process.env['ENV'];
  
  console.log("[eBalitaAPI]", "booting with environment : " + env);
  console.log("[eBalitaAPI]", "svc address :", server.address());
  console.log("[eBalitaAPI]", "mysql host :", config[`${env}`].host);
  console.log("[eBalitaAPI]", "mysql username :", config[`${env}`].username);
  console.log("[eBalitaAPI]", "mysql database :", config[`${env}`].database);

});