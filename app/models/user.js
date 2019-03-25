// Design Pattern DAO;

class User {
    constructor(database) {
        this._connection = database.sqlite;
        this._hash = database.hash;
    }

    auth(data) {
        const md5 = require('md5');
        const  {username, password} = data; 
        try {
            let user = this._connection.run(`select * from users 
            where username='${username}'`);
            if (user[0].password === (md5(password) + this._hash)) {
                user[0].password = null;

                

            }
        } catch {
            return false;
        }
    }
    createToken() {
        // Json Web Token
        const jwt = require('jsonwebtoken');
        const auth = require('../../config/auth/auth.json');
        const token = jwt.sign({
            id: user[0].id
        }, auth.secret, {
            expiresIn: 86400,
        });

        return token;
    }
}

module.exports = () => {
    return User;
}