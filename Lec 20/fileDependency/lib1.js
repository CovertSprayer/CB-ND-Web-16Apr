const lib2 = require('./lib2')

console.log('Inside Lib 1');

const libOne = 'random';
const add = () => { return a + b };

// module.exports = {
//     libOne, add, lib2
// }

module.exports.libOne = libOne;
module.exports.add = add;
module.exports.lib2 = lib2;
