// console.log(this);

// this.num = 78;

// function fun(){
//     this.str = "This is String";
//     console.log(this);
// }

// fun();

//  ----------------- implicite

let obj = {
    num:8934598,
    str:"this is string",
    fun:function(){
        this.age = 40;
        console.log(this);
    }
}

// obj.fun();

function updateAge(age, name){
    this.age = age;
    this.name = name;
}

// function updateAge(first, second, third and so on...){
//     this.age = age;
// }

let student1 = {
    name:"abc",
    age:22,
    rollNo:12
}

let student2 = {
    name:"xyz",
    age:20,
    rollNo:1
}


// updateAge.call(object, firstArgument, secondArg, and so on...)

updateAge.apply(student1, [18, 'defghi'])
// updateAge.call(student1, 18);
// updateAge.call(student2, 28);
console.log(student1);
// console.log(student2);
