const {Discipline, Activity, User} = require("../models");

const title = "Atividade";

exports.index = async function (req, res) {
    const {discipline} = req.query;

    const activities = await Activity.findAll({
        raw: true,
        nest: true,
        where: discipline ? {discipline_id: discipline} : {},
        include: [
            {
                model: Discipline,
                attributes: ['name']
            }
        ]
    });

    const context = {
        title: title,
        activities: activities
    };

    res.render('activity/index', context);
};

exports.create = async function (req, res) {

    const disciplines = await Discipline.findAll({
        raw: true,
        order: [
            ['name'],
        ],
    });

    const context = {
        title: title,
        disciplines: disciplines
    }

    res.render('activity/create', context)
}

exports.store = async function (req, res) {
    const {name, text, discipline_id, active} = req.body;

    const newActivity = {
        name: name,
        text: text,
        active: active,
        discipline_id: discipline_id
    };

    try {
        await Activity.create(newActivity)

        req.flash('success', `Atividade ${name} criada com sucesso!`)
        res.redirect('/activity');
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao salvar atividade: " + error.message);
    }
}

exports.edit = async function (req, res) {

    const id = req.params.id;
    var activity = await Activity.findByPk(id);

    var disciplines = await Discipline.findAll({
        order: [
            ['name'],
        ],
    });
    disciplines = disciplines.map(discipline => ({
        ...discipline.dataValues,
        selected: discipline.id === activity.discipline_id
    }));

    var context = {
        title: title,
        disciplines: disciplines,
        ...activity.dataValues
    }

    res.render('activity/edit', context);
}

exports.update = async function (req, res) {
    const {id, name, text, discipline_id, active} = req.body;

    const updateActivity = {
        name: name,
        text: text,
        active: active,
        discipline_id: discipline_id
    };

    try {
        await Activity.update(updateActivity, {
            where: {id: id}
        });

        req.flash('success', `Atividade ${name} atualizada com sucesso!`)
        res.redirect('/activity');
    } catch (error) {
        res.status(500).send("Erro ao salvar atividade: " + error.message);
    }
}

exports.delete = async function (req, res) {
    const {id} = req.params;

    const activity = await Activity.findOne({where: {id: id}});

    await Activity.destroy({
        where: {id: id}
    });

    req.flash('success', `Atividade ${activity.name} excluída com sucesso!`)

    res.redirect('/activity')
}

exports.active = async function (req, res) {
    const {id} = req.params;

    const activity = await Activity.findOne({where: {id: id}});

    await Activity.update({active: true}, {
        where: {id: id}
    });

    req.flash('success', `Atividade ${activity.name} ativada com sucesso!`)

    res.redirect('/activity')
}

exports.inactive = async function (req, res) {
    const {id} = req.params;

    const activity = await Activity.findOne({where: {id: id}});

    await Activity.update({active: false}, {
        where: {id: id}
    });

    req.flash('success', `Atividade ${activity.name} inativada com sucesso!`)

    res.redirect('/activity')
}

module.exports = exports;
