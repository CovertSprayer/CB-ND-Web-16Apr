const colors = require('colors');
const figlet = require('figlet');

console.log('This is our First App'.green);
console.log('This is our First App'.underline.red);
console.log('This is our First App'.rainbow);

figlet('Temp String', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log(data.green);
})

figlet('JavaScript', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log(data.rainbow);
})