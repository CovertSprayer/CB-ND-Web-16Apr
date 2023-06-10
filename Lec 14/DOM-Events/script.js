const heading = document.querySelector('h1');

// heading.onclick= function(){
//     window.alert(`Don't Click This`);
// }

// heading.onclick = function(){
//     console.log('Clicked!!');
// }

// heading.addEventListener('click', ()=>{
//     window.alert(`Don't Click This`);
//     console.log('Hello from first Event Listner');
// })

// heading.addEventListener('click', (e)=>{
//     console.log(e.target);
//     e.target.style.border = '2px solid black';
//     e.target.style.color = 'red';

//     // console.log('Hello from second Event Listner');
// })

// console.dir(heading);

// heading.addEventListener('mouseenter', (e)=>{
//     // e.target.setAttribute('class', 'one');
//     e.target.classList.add('one');
// })

heading.addEventListener('copy',(e)=>{
    e.target.style.display = 'none';
    window.alert('Cheating krta haiii!!')
})

heading.addEventListener('mouseleave', (e)=>{
    e.target.classList.remove('one');
})

heading.addEventListener('dblclick', function(){
    this.style.display = 'none';
})


// --------------------------------------- KeyboardEvent 

const inp = document.querySelector('input');

// inp.addEventListener('keydown', (e)=>{
//     console.log(e.key);
//     // console.log(e.target.value);
// })

// inp.addEventListener('keyup', (e)=>{
//     console.log(e.key);
//     // console.log(e.target.value);
// })

//  ------------------------------- input Event
inp.addEventListener('focusin', (e)=>{
    e.target.style.backgroundColor = 'yellow';
})

inp.addEventListener('focusout', (e)=>{
    e.target.style.backgroundColor = '';
})
