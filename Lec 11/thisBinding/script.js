// console.log(this);

// this.num = 78;

// function fun(){
//     this.str = "This is String";
//     console.log(this);
// }

// fun();

//  ----------------- implicit

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



// --------------- constructor function

function Student(name, age, rollNo){
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;

    this.getRollNo = function(){
        console.log(this.rollNo);
    }
}

let Student3 = new Student('salman khan', 65, 156); 

Student3.getRollNo();

