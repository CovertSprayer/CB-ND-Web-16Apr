const fs = require('fs');
const path = require('path');

function getData(fileName){
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname, 'data', fileName);

        fs.readFile(loc, 'utf-8', (err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}


async function generateOutput(){
    const data1 = await getData('input1.txt');
    const data2 = await getData('input2.txt');

    const arr1 = data1.split('\r\n');
    const arr2 = data2.split('\r\n');

    const finalArr = [...arr1, ...arr2];

    finalArr.sort((a,b)=>a-b);

    const finalData = finalArr.join('\r\n');
    // console.log(finalData);

    const outputFileLoc = path.join(__dirname, 'data', 'output2.txt');

    fs.writeFile(outputFileLoc, finalData, (err)=>{
        if(err){
            console.log(err);
        }
        console.log('File Written Successfully!!');
    })

}

generateOutput();