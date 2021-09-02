import sql from '../../database/database';

class user {

  login(username: any, password: any) {
    return sql.query("SELECT * FROM view_user_login \
        WHERE username = ? AND password= ?",
            [
                username,
                password
            ]);
  }

  findAll() {
    return sql.query("SELECT * FROM view_user_login",[]);
  }
}

export default new user