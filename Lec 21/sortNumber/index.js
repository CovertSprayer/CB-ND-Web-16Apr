const fs = require('fs');
const path = require('path');


// fs.readFile(F1_loc, 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }

//     data1 = data;
// })
// console.log(data1);

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


getData('input1.txt')
    .then((data)=>{
        const data1 = data.split('\r\n');
        // console.log(data1);

        getData('input2.txt')
            .then((data)=>{
                const data2 = data.split('\r\n');
                // console.log(data2);

                const finalData = [...data1, ...data2];
                finalData.sort((a,b)=> a-b);
                // console.log(finalData);

                const outputData = finalData.join('\r\n');
                // console.log(outputData);
                
                const finalLoc = path.join(__dirname, 'data', 'output.txt');
                fs.writeFile(finalLoc, outputData, (err)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log('Successfully written output file!');
                })
            })
    })



