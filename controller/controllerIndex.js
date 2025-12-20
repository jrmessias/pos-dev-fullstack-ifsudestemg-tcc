exports.index = async function (req, res) {

    const contexto = {
        title: 'Rankio',
    };

    res.render('index', contexto);
};

module.exports = exports;
