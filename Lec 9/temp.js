// weakly typed vs strongly typed 
a = 10;
a = "this is string";

console.log(a);
console.log(typeof a);

// strong equality vs loose equality
var a = 10;
var b = '10';

console.log(a == b); // true
console.log(a === b); // false