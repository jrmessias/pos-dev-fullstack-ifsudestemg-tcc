exports.index = async function (req, res) {

    const contexto = {
        title: 'Gerenciador de Produtos',
    };

    res.render('index', contexto);
};

module.exports = exports;
