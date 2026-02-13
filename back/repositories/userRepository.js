const {User} = require("../models");

exports.findUserByEmail = async function findUserByEmail(email) {
    const user = await User.findOne({where: {email: email}});
    return user != null ? user : null;
}

exports.createUser = async function createUser(userData) {
    const user = await User.create(userData);
    return user;
}

module.exports = exports;
