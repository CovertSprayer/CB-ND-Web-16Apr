const URL = 'https://dummyjson.com/products';

const btn = document.querySelector('#btn')
const list = document.querySelector('.list')

// creating an instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// run this function when req is successfull
xhr.onload = function(res){
    const data = JSON.parse(res.target.response).products;
    console.log(data);

    const productTitle = data.map((item) => {
        return item.title;
    })

    // console.log(productTitle);
    addDataToList(productTitle);
}

// run this funciton when req is rejected
xhr.onerror = function(err){
    console.log(err);
}

function addDataToList(textData){
    list.innerText = '';
    for(let data of textData){
        const li = document.createElement('li');
        li.innerText = data;
        list.append(li);
    }
}

btn.addEventListener('click', ()=>{

    // define where to send request
    xhr.open('GET', URL);

    xhr.send();
})