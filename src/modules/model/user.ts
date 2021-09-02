import sql from '../../database/database';

class UserModel {

  login(username: any, password: any) {
    return sql.query("SELECT * FROM view_user_login \
        WHERE username = ? AND password= ?",
            [
                username,
                password
            ]);
  }

  findAll() {
    return sql.query("SELECT * FROM master_keperluan",[]);
  }
}

export default UserModel