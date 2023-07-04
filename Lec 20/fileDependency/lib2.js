const lib1 = require('./lib1');

console.log('Inside Lib 2');

const libTwo = 'random';
const multiply = () => { return a * b };

// module.exports = {
//     libTwo, multiply, lib1
// }

module.exports.libTwo = libTwo;
module.exports.multiply = multiply;
module.exports.lib1 = lib1;