const form = document.querySelector('form');
const usernameInp = document.querySelectorAll('input')[0];
const passwordInp = document.querySelectorAll('input')[1];

form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    console.log(usernameInp.value);
    console.log(passwordInp.value);

    usernameInp.value = '';
    passwordInp.value = '';
})