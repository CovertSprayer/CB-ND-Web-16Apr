
var arr = [1, 4, 8, 9, 12, 15];
console.log(arr.length);


// ---------------------------  normal for loop
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// --------------------------- for of loop (array)

for(var item of arr){
    console.log(item);
}

// --------------------------- for in loop (object)

var person = {
    'full name':"abc def",
    age:25,
    isAdult:true,
    marks: [98, 40, 68]
}

for(var key in person){
    console.log(person[key]);
}


//  for each -------------- aage padenge!