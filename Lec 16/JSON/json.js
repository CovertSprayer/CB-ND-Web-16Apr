let data = {
    name:"Sachin",
    age: 24,
    email: "abcd@gmail.com",
    isAdult: true,
    getAge: function(){
        return this.age;
    }
}

const strData = JSON.stringify(data);
console.log(strData);
const newData = JSON.parse(strData);
console.log(newData);
console.log(newData.name);



