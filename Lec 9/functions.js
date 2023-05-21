
function add(a,b){
    return a+b;
}

// console.log(typeof add);
console.log(add(5,7));


// functions are also datatypes in js 
// like we have string, number, boolean etc

var a = function multiply(a,b){
    return a*b;
}

console.log(a(2,3));

// anonymous function
var b = function(a,b){
    return a*b;
}

console.log(b(20,3));
