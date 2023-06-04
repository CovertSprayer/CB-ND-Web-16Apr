
// function result(kalMilneAunga){
//     return new Promise((resolve, reject) =>{
//         if(kalMilneAunga){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// result(!true)
//     .then(()=>{
//         console.log("han! Milne aagya!");
//     })
//     .catch((err)=>{
//         console.log('nhi milne aaya',err);
//     })


function fetch(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = [{id:1, name:'laptop', price:200}, {id:2, name:'phone', price:100}, {id:3, name:'pen', price:50}]
            resolve(data);
        }, 3000);
    })
}

fetch()
    .then((data)=>{
        console.log(data);
        let finalData = data.filter((item)=>{
            return item.price >=100;
        })
        return finalData;
    })
    .then((finalData)=>{
        console.log(finalData);
    })
    




