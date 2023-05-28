
function Student(name, age, marks){
    this.name = name,
    this.age = age,
    this.marks = marks
}

Student.prototype.getMarks = function(){
    console.log(this.marks);
}

let s1 = new Student('vishal', 20, 78);
let s2 = new Student('vaibhav', 22, 90);
console.log(s1);
console.log(s2);
console.log(s1.hasOwnProperty("name"));

// s1.getMarks();

console.log(s1.__proto__ === Student.prototype); //true
console.log(Student.__proto__ === Function.prototype); //true
console.log(String.prototype.__proto__ === Object.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(Number.prototype.__proto__ === Object.prototype); //true
console.log(Boolean.prototype.__proto__ === Object.prototype); //true
console.log(Array.prototype.__proto__ === Object.prototype); //true
