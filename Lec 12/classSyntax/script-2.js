
class Vehicle{
    constructor(np){
        this.np = np;
    }

    getNumberPlate(){
        console.log(np);
    }
}


class Car extends Vehicle{
    constructor(np, color){
        super(np);
        this.color = color;
    }

    printCar(){
        console.log(`numPlate: ${this.np}, name: ${this.name}`);
    }
}


class ElectricCar extends Car{
    constructor(np, color, battery){
        super(np, color);
        this.battery = battery;
    }
}


let Maruti = new Car('2jkj343', 'brown');
let Nexon = new ElectricCar('382498', 'black', '40');
console.log(Maruti);
console.log(Nexon);




