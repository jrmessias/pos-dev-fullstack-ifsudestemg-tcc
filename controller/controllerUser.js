const {User} = require("../models");
const {Op} = require("sequelize");

const title = "Usuários";

exports.index = async function (req, res) {
    const users = await User.findAll({raw: true});

    const contexto = {
        title: title,
        users: users
    };

    res.render('user/index', contexto);
};

exports.create = async function (req, res) {
    const contexto = {
        title: title,
    }

    res.render('user/create', contexto)
}

exports.store = async function (req, res) {
    const {name, email} = req.body;

    const existingUser = await User.findOne({where: {email: email}});
    if (existingUser) {
        req.flash('error', `O email ${email} já está em uso.`)
        req.flash('form', req.body)
        console.log(req.body)
        return res.redirect('/user/create');
    }

    const newUser = {
        name: name,
        email: email,
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

// // GET → visualiza dados da nota
// exports.show = async function (req, res) {
//     // parâmetro vindo da rota /nota/show/:id
//     const id = req.params.id;
//
//     try {
//         await Nota.update({lida: true}, {where: {id: id}});
//         const nota = await Nota.findByPk(id);
//
//         nota.dataValues.tags = await nota.getTags();
//         const usuario = await nota.getUsuario();
//         const nome = usuario.dataValues.nome;
//         nota.dataValues.usuario = nome;
//
//         const contexto = {
//             titulo_pagina: "Consulta a Nota",
//             nota: nota.dataValues
//         };
//
//         res.render('nota/show', contexto);
//
//     } catch (erro) {
//         res.status(404).send("Nota não encontrada: " + erro.message);
//     }
// }

exports.edit = async function (req, res) {

    const id = req.params.id;
    var user = await User.findByPk(id);

    var contexto = {
        title: title,
        ...user.dataValues
    }

    res.render('user/edit', contexto);
}

exports.update = async function (req, res) {
    const { name, email, id } = req.body;

    const existingUser = await User.findOne({where: {email: email, id: {[Op.ne]: id}}});
    if (existingUser) {
        req.flash('error', `O email ${email} já está em uso.`)
        return res.redirect('/user/edit/' + id);
    }

    const updateUser = {
        name: name,
        email: email,
    };

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
//
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
