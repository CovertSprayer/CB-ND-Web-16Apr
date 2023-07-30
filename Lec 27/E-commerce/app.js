const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');

mongoose.connect('mongodb://127.0.0.1:27017/e-com-db')
    .then(()=>{console.log('e-com-db connected!!')})
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Working Fine!');
});


// ------------- routes
const productRoutes = require('./routes/product');

app.use(productRoutes);


const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});