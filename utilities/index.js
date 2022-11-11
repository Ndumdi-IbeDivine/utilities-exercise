const firstTwo = require("./import");

const {sum, concat} = require("./import2");


const number = firstTwo.largeNumber([5, 6, 3])
console.log(number);

const string = firstTwo.cut3(["cat", "has", 9, "lives"]);
console.log(string);

const sumNumbers = sum([3, 4, 5]);
console.log(sumNumbers);

const join = concat([1,2,3], [4,5,6]);
console.log(join);