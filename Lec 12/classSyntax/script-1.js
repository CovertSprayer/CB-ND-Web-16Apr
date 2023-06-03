
class Vehicle{
    constructor(name,np,color){
        this.name = name;
        this.np = np;
        this.color = color;
    }

    getAllData(){
        console.log(`name: ${this.name}, numberPlate: ${this.np}, color: ${this.color}`);
    }

    // get and set behave as a property
    get getName(){ 
        console.log(this.name);
    }

    set setColor(col){
        this.color = col;
    }

    static getSomething(){
        console.log('This is Vehicle Class');
    }

}


let Vehicle1 = new Vehicle('Maruti', 'sdfjk324723jkd', 'yellow');

Vehicle1.getAllData();
Vehicle1.getName;
Vehicle1.color = 'red';
Vehicle.getSomething(); // can access
Vehicle1.getSomething(); // cannot access
console.log(Vehicle1);
