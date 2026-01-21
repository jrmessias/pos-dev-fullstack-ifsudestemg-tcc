module.exports = {
    ifEquals: function (a, b, options) {
        return a == b ? options.fn(this) : options.inverse(this);
    },
    selected: function (value, selectedValue) {
        return value == selectedValue ? 'selected' : '';
    },
    statusAtivo: function(value, check) {
        return check ? 'Ativa' : 'Inativa';
    },
    statusSim: function(value, check) {
        return check ? 'Sim' : 'Nao';
    },
};
