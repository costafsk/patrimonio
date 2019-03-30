// Design Pattern DAO;

class User {
    constructor(database) {
        this._connection = database.sqlite;
        this._hash = database.hash;
    }

    async auth(request) {
        const md5 = require('md5');

        const  {username, password} = request.body;
        
        const query = `select * from users where username='${username}'`;
        
        try {
            let user = await this._connection.run(query);
            if (user[0].password === (md5(password) + this._hash)) {
                user[0].password = null;
                return true;
            }
            return false;
        } catch {
            return false;
        }
    }
}

module.exports = () => {
    return User;
}