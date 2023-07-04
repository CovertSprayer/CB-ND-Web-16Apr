
// function updatePerson() {
//     this.name = 'abcd';
//     this.age = '16';
// }

// const person1 = {
//     name: 'Rahul',
//     age: 25
// }

// const person2 = {
//     name: 'Abhishek',
//     age: 30
// }

// const newFun = updatePerson.bind(person2);
// newFun();

// console.log(person1);
// console.log(person2);


let items = {
    noOfItems: 0,
    update_noOfItems: function () {
        this.noOfItems++;
        console.log(this);
    }
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log(items.noOfItems);
})

btn.addEventListener('click', items.update_noOfItems.bind(items))


