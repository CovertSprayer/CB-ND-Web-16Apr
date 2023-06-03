
let Vehicle = {
    numberPlate: 'sdfduy2138sdf',
    color:'black',
    type:'EV',
    getProperties: function(){
        console.log(this.numberPlate, this.color, this.type);
    }
}

// console.log(Vehicle);
// Vehicle.getProperties();

let Car = Object.create(Vehicle); 

// console.log(obj1);
// console.log(obj1.numberPlate);

// console.log(obj1.__proto__ === Vehicle);
