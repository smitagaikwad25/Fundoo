const USER_LOGIN_MODULE = require("../module/user.module")

exports.registerUser = (data, callback) => {

    USER_LOGIN_MODULE.registerUser(data, (err, data) => {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    });

};