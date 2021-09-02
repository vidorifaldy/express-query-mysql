import { UserService } from '../service'
import {Request, Response} from 'express';
import BaseController from '../../../lib/baseController';
import ResponseBuilder from '../../../utils/responseBuilder';
import HandleError from '../../../lib/handleError';

class userController extends BaseController {

  constructor(){
    super(UserService)
  }

  async findAll(req: Request, res: Response) {
    const responseBuilder = new ResponseBuilder();
    const handleError = new HandleError();

    try {

      let hasil = await this.service.findAll()
      let action = {boleh : "masuk"}

      this.sendSuccessResponse(
        res,
        responseBuilder
          .setData(hasil)
          .setAction(action)
          .setMessage('User has authority to access this')
          .build()
      );

    } catch (error) {
      handleError.sendCatchError(res, error);
    }
  }
}

export default userController