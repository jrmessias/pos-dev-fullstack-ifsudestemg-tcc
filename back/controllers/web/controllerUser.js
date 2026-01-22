const {User} = require("../../models");
const {Op} = require("sequelize");
const bcrypt = require("bcryptjs");

const title = "Usuário";

exports.index = async function (req, res) {
    const users = await User.findAll({raw: true});

    const context = {
        title: title,
        users: users
    };

    res.render('user/index', context);
};

exports.create = async function (req, res) {
    const context = {
        title: title,
    }

    res.render('user/create', context)
}

exports.store = async function (req, res) {
    const {name, email, password, role} = req.body;

    const existingUser = await User.findOne({where: {email: email}});
    if (existingUser) {
        req.flash('error', `O email ${email} já está em uso.`)
        req.flash('form', req.body)
        return res.redirect('/user/create');
    }

    const salt = await bcrypt.genSalt ( ) ;
    const passwordHashed = await bcrypt.hash (password, salt );

    const newUser = {
        name: name,
        email: email,
        password: passwordHashed,
        role: role,
    };

    try {
        await User.create(newUser)

        req.flash('success', `Usuário ${name} criado com sucesso!`)
        res.redirect('/user');
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao salvar usuário: " + error.message);
    }
}

exports.edit = async function (req, res) {

    const id = req.params.id;
    var user = await User.findByPk(id);
    console.log(user)

    var context = {
        title: title,
        ...user.dataValues
    }

    res.render('user/edit', context);
}

exports.update = async function (req, res) {
    const { name, email, id, password, role } = req.body;

    const existingUser = await User.findOne({where: {email: email, id: {[Op.ne]: id}}});
    if (existingUser) {
        req.flash('error', `O email ${email} já está em uso.`)
        return res.redirect('/user/edit/' + id);
    }

    const updateUser = {
        name: name,
        email: email,
        role: role,
    };

    if(password.length > 0) {
        const salt = await bcrypt.genSalt();
        updateUser.password = await bcrypt.hash(password, salt);
    }

    try {
        await User.update(updateUser, {
            where: {id: id}
        });

        req.flash('success', `Usuário ${name} atualizado com sucesso!`)
        res.redirect('/user');
    } catch (error) {
        res.status(500).send("Erro ao salvar usuário: " + error.message);
    }
}

exports.delete = async function (req, res) {
    const { id } = req.params;

    const user = await User.findOne({where: {id: id}});

    await User.destroy({
        where: {id: id}
    });

    req.flash('success', `Usuário ${user.name} excluído com sucesso!`)

    res.redirect('/user')
}
//
// exports.read = async function (req, res) {
//     await Nota.update({lida: true}, {
//         where: {id: req.params.id}
//     });
//
//     res.redirect('/')
// }
//
// exports.unread = async function (req, res) {
//     await Nota.update({lida: false}, {
//         where: {id: req.params.id}
//     });
//
//     res.redirect('/')
// }

module.exports = exports;
