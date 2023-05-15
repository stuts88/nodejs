// Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-sayHi');
const data = require('./6-alternative_flavour')
require('./7-addNumbers')


console.log(data)
console.log(names)

sayHi('Hermoine')
sayHi(names.harry)
sayHi(names.ron)