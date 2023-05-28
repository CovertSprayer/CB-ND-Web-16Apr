
// console.log('Wake up');
// console.log('Take bath');
// console.log('Take class');

// setTimeout(()=>{
//     console.log('Order to zomato');
// }, 3000);

// setTimeout(()=>{
//     console.log('order to swiggy');
// }, 2000)  

// console.log('Dancing');


// ---------------- setInterval

let id = setInterval(()=>{
    console.log('Hello!');
},1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);



