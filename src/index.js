var calcArea = require('./squareFunction')
var addFunction = require('./addFunction')
var number = require('./number')
var stats = require('simple-statistics')

console.log(calcArea(number))
console.log(addFunction(16,33))


var numbers = [1,2,4,7,9,11,45]


console.log(stats.max(numbers))
console.log(stats.min(numbers))
console.log(stats.median(numbers))
console.log(stats.product(numbers))
console.log(stats.(numbers))