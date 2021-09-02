
import BaseService from "../../../lib/baseService";
import { modelKnex } from ".";
import { nestedMenu } from "../../../utils/convertion";

class userServiceKnex extends BaseService {
  
  constructor() {
    super(modelKnex);
  }

  async findAll() {
    const { table, execQuery } = this.model;
    try {
      let buku = await execQuery(table)
      // let buku = await execQuery(table).where({username: 'superadmin'})
      let nestedbidang = nestedMenu(buku)
      return nestedbidang
    } catch (e) {
        console.log(e);
    }
  }
}

export default new userServiceKnex