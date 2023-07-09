const fs = require('fs');
const path = require('path');

const data = 'This is temp string data';
const loc = path.join(__dirname, 'data','file1.txt');

// console.log(__dirname);

// fs.writeFile(loc, data, (err)=>{
//     if(err){
//         return console.log(err);
//     }

//     console.log('File written successfully!!');

// });


fs.readFile(loc, {encoding:'utf-8'}, (err, data)=>{
    if(err){
        console.log(err);
    }

    // console.log(data.toString());
    console.log(data);
})


