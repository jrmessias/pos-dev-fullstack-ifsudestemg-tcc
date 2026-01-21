exports.index = async function (req, res) {

    const context = {
        title: 'Rankio',
    };

    res.render('index', context);
};

module.exports = exports;
