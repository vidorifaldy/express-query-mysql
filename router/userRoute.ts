import express from 'express';
import userController from "../src/modules/user/controller";
import userControllerKnex from "../src/modules/user copy/controllerKnex";
import { UserController } from '../src/modules/controller';

const router = express.Router();

router.get('/findAll', (req, res) => {
  console.log('masuk sini')
  userController.findAll(req, res)
})

router.get('/findA', (req, res) => {
  userControllerKnex.findAll(req, res)
})

router.get('/findAO', (req, res) => {
  UserController.findAll(req, res)
})

export default router;
// module.exports = router