const express = require('express');
const app = express();



app.get('/', (req, res)=>{
    res.send('You made a Request');
});

app.listen(5000, ()=>{
    console.log('Server Started at port', 5000);
});