const heading = document.querySelector('h1');

// heading.onclick= function(){
//     window.alert(`Don't Click This`);
// }

// heading.onclick = function(){
//     console.log('Clicked!!');
// }

heading.addEventListener('click', ()=>{
    // window.alert(`Don't Click This`);
    // console.log('Hello from first Event Listner');
})

heading.addEventListener('click', (e)=>{
    console.log(e.target);
    e.target.style.border = '2px solid black';
    e.target.style.color = 'red';

    // console.log('Hello from second Event Listner');
})


// console.dir(heading);