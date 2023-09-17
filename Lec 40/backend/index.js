const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Working Fine!');
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});