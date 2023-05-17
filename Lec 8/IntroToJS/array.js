
var arr = [1, 2, 3, true, "hello", [90,50,60]];

// console.log(arr[5]);
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for of loop
// for(let item of arr){
//     console.log(item);
// }
console.log("before: ", arr);

arr.push(6);
arr.push(16);
arr.pop();
arr.pop();
arr.pop();

arr.shift();
arr.shift();

arr.unshift(5);

console.log("after: ",arr);



