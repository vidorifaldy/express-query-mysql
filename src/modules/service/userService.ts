import { userModel } from "../model"

class UserController {

  async findAll() {

    try {

      let hasil = await userModel.findAll()
      return hasil

    } catch (error) {
      throw Error(error.message);
    }
  }
}

export default UserController