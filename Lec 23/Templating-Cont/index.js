const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const productData = require('./data/products');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/random',(req,res)=>{
    const randomNumber = Math.floor(Math.random() * 10);
    res.render('random', {randomNumber});
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/products', (req, res)=>{
    // res.json(productData);
    res.render('product', {
        products: productData
    })
})

app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});