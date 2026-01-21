const {User, Discipline} = require("../models");
const generateKey = require("../helpers/generateKey");
const currentDateToArray = require("../helpers/currentDateToArray");

const title = "Disciplina";

exports.index = async function (req, res) {
    const {user} = req.query;

    const disciplines = await Discipline.findAll({
        raw: true,
        nest: true,
        where: user ? {user_id: user} : {},
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    });

    const context = {
        title: title,
        disciplines: disciplines
    };

    res.render('discipline/index', context);
};

exports.create = async function (req, res) {

    const users = await User.findAll({
        raw: true,
        order: [
            ['name'],
        ],
    });

    const context = {
        title: title,
        users: users
    }

    res.render('discipline/create', context)
}

exports.store = async function (req, res) {
    const {name, description, user_id, active} = req.body;

    let dateArray = currentDateToArray();

    const key = generateKey(dateArray);

    const newDiscipline = {
        name: name,
        description: description,
        active: active,
        key: key,
        user_id: user_id
    };

    try {
        await Discipline.create(newDiscipline)

        req.flash('success', `Disciplina ${name} criada com sucesso!`)
        res.redirect('/discipline');
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao salvar disciplina: " + error.message);
    }
}

exports.edit = async function (req, res) {

    const id = req.params.id;
    var discipline = await Discipline.findByPk(id);

    var users = await User.findAll({
        order: [
            ['name'],
        ],
    });
    users = users.map(user => ({
        ...user.dataValues,
        selected: user.id === discipline.user_id
    }));

    var context = {
        title: title,
        users: users,
        ...discipline.dataValues
    }

    res.render('discipline/edit', context);
}

exports.update = async function (req, res) {
    const {id, name, description, user_id, active} = req.body;

    const updateDiscipline = {
        name: name,
        description: description,
        active: active,
        user_id: user_id
    };

    try {
        await Discipline.update(updateDiscipline, {
            where: {id: id}
        });

        req.flash('success', `Disciplina ${name} atualizada com sucesso!`)
        res.redirect('/discipline');
    } catch (error) {
        res.status(500).send("Erro ao salvar disciplina: " + error.message);
    }
}

exports.delete = async function (req, res) {
    const {id} = req.params;

    const discipline = await Discipline.findOne({where: {id: id}});

    await Discipline.destroy({
        where: {id: id}
    });

    req.flash('success', `Disciplina ${discipline.name} excluída com sucesso!`)

    res.redirect('/discipline')
}

exports.active = async function (req, res) {
    const {id} = req.params;

    const discipline = await Discipline.findOne({where: {id: id}});

    await Discipline.update({active: true}, {
        where: {id: id}
    });

    req.flash('success', `Disciplina ${discipline.name} ativada com sucesso!`)

    res.redirect('/discipline')
}

exports.inactive = async function (req, res) {
    const {id} = req.params;

    const discipline = await Discipline.findOne({where: {id: id}});

    await Discipline.update({active: false}, {
        where: {id: id}
    });

    req.flash('success', `Disciplina ${discipline.name} inativada com sucesso!`)

    res.redirect('/discipline')
}

module.exports = exports;
