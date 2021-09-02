import user from "./model"
import express, {Application, Request, Response} from 'express';

export default new class userController {

  async findAll(req: Request, res: Response) {

    try {

      let hasil = await user.findAll()
      res.send(hasil)

    } catch (err) {

        // utils.sendQueryFailResponse(res, err);
    }
  }
}