const parent = document.querySelector('.container')
// const children = document.querySelectorAll('.child');


// for(let child of children){
//     child.addEventListener('click', (e)=>{
//         console.log(e.target.innerText);
//     })
// }

parent.addEventListener('click',(e)=>{
    console.log(e.target.innerText);
})