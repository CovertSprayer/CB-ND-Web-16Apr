const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('#btn')
const list = document.querySelector('.list')

btn.addEventListener('click', ()=>{
    fetch(URL)
        .then((res)=>{
            // console.log(res);
            return res.json();
        })
        .then((data)=>{
            // console.log(data);
            for(let obj of data){
                // console.log(obj.text);
                const li = document.createElement('li');
                li.innerText = obj.text;
                list.append(li);
            }
        })
        .catch(err => {
            console.log("Something Went Wrong!!");
        })
})



