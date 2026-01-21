const Sqids = require('sqids').default;

function generateKey(array, comprimento = 10) {
    const sqids = new Sqids()
    const id = sqids.encode(array)

    return id;
}

module.exports = generateKey;
