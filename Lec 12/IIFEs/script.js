// ()
// (()=>{})
// (()=>{})();

let personObj = (()=>{
    let Person = {
        name : 'Vishal',
        age : 24,
        marks: 80,
    }   

    function updateName(naam){
        Person.name = naam;
    }

    function updatMarks(m){
        Person.marks = m;
    }

    function print(){
        console.log(Person);
    }

    updatMarks(99);

    return {
        updateName,
        print
    }

})();

personObj.print();
personObj.updateName('xyz');
personObj.print();
// personObj.updatMarks(100);
personObj.print();
