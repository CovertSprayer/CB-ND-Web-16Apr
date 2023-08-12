const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 5000;

app.use(cookieParser('randomSecrets'));

app.get('/', (req, res) => {
    res.send('Working Fine!');
});

// app.get('/setCookie', (req, res)=>{
//     res.cookie('name', 'salman khan');
//     res.send('cookie set');
// });

// app.get('/getCookie', (req, res)=>{
//     const {name} = req.cookies;
//     console.log();
//     res.send(`Name is ${name}`);
// });


// app.get('/buyIphone', (req, res)=>{
//     res.cookie('price', '40000');
//     res.send('you have successfully purchased an Iphone');
// });

// app.get('/buyEarbuds', (req, res)=>{
//     const {price} = req.cookies;
//     let discountPrice = 10000;
//     let earbudsPrice = 30000;
//     if(price >= 50000){
//         earbudsPrice = earbudsPrice - discountPrice;
//         res.cookie('price', earbudsPrice);
//         res.send('successfully purchased earbuds'); 
//     }
//     else{
//         res.send('You have not spent enough paisa')
//     }
// });

app.get('/buyIphone', (req, res) => {
    res.cookie('price', '40000', { signed: true });
    res.send('you have successfully purchased an Iphone');
});

app.get('/buyEarbuds', (req, res)=>{
    const {price} = req.signedCookies;
    let discountPrice = 10000;
    let earbudsPrice = 30000;
    console.log(price);
    if(price && price >= 50000){
        earbudsPrice = earbudsPrice - discountPrice;
        res.cookie('price', earbudsPrice);
        res.send('successfully purchased earbuds'); 
    }
    else{
        res.send('You have not spent enough paisa')
    }
});

app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});