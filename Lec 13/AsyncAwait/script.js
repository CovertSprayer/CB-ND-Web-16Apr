function downloadFile(path){
    return new Promise((resolve, reject) => {
        console.log('File started to download from path:', path);
        setTimeout(() => {
            let file = path.split('/').pop();
            // let file;
            if(!file){
                // throw new Error('Cannot read file');
                reject('cannot read file');
            }
            resolve(file);     
        }, 3000);
    })
}


function compressFile(file){
    return new Promise((resolve, reject) => {
        console.log('File started to compress');
        setTimeout(() => {
            let compressedFile = file.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 2000);
    })
}

function uploadFile(compressedFile){
    return new Promise((resolve, reject) => {
        console.log(`File started to upload at http://facebookCloud.com/${compressedFile}`);
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}


// downloadFile('https://facebook.com/profile.jpg')
//     .then(compressFile)
//     .then(uploadFile)
//     .then(()=>{
//         console.log('All Done!')
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

async function solve(){
    try {
        let file = await downloadFile('https://facebook.com/profile.jpg');
        // console.log(file);
        let compressedFile = await compressFile(file);
        // console.log(compressedFile);
        await uploadFile(compressedFile);

    } catch (error) {
        console.log(error);
    }
}

solve();



