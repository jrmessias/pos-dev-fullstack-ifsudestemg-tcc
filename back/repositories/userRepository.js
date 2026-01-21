const {User} = require("../models");

exports.findUserByEmail = async function findUserByEmail(email) {
    const user = await User.findOne({where: {email: email}});
    return user != null ? user : null;
}

module.exports = exports;


