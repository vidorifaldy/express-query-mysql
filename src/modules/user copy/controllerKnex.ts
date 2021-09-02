
import userServiceKnex from "./serviceKnex";

import { Request, Response} from 'express';
import { getHostName } from "../../../utils/convertion";
import ResponseBuilder from "../../../utils/responseBuilder";
import BaseController from "../../../lib/baseController";
import serviceKnex from "./serviceKnex";

class userControllerKnex extends BaseController{
  
  constructor(){
    super(serviceKnex);
  }

  async findAll(req: Request, res: Response) {
    const responseBuilder = new ResponseBuilder();
    try {
      let hasil = await userServiceKnex.findAll()

      let action = {boleh: "masuk"}

      this.sendSuccessResponse(
        res,
        responseBuilder
          .setData(hasil)
          .setAction(action)
          .setMessage('User has authority to access this')
          .build()
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default new userControllerKnex()