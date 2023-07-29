const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDB')
    .then(() => { console.log('myDB connected!') })
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    contact: Number
});

const User = mongoose.model('User', userSchema);


// --------------> CREATE
// const newUser = new User({
//     name:'Vishal',
//     age:25,
//     email:'vishal@gmail.com',
//     contact:9090909090
// });

// newUser.save()
//     .then(data => console.log(data));

// User.create({
//     name: 'Prakhar',
//     age: 21,
//     email: 'prakhar@yahoo.com',
//     contact: 9999999999
// }).then(data => console.log('Document craeted successfully!'));

// --------> READ
// User.find({name:'Prakhar'}).then(data => console.log(data));



// -----------------> UPDATE
// User.updateOne({name:'Prakhar'},  {email:'prakhar@gmail.com'})
//     .then(data => console.log(data));


// ---------------------> DELETE

// User.deleteOne({name:'Prakhar'})
//     .then((data)=>{console.log(data, 'Document deleted successfully!')});

// User.deleteMany({})
//     .then(() => { console.log('data deleted successfully') })


User.findById('64c4a942e587b862dd6942f6')
    .then(data => console.log(data));