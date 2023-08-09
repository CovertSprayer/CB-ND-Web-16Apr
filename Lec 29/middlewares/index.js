const express = require('express');
const app = express();
const PORT = 5000;


const checkPassword = (req, res, next) => {
    const { password } = req.params;
    // if(password === 'abcd'){
    //     next();
    // }
    // else{
    //     res.send('Unauthorised!!');
    // }
    if(password !== 'abcd'){
        return res.send('Unauthorised');
    }

    next();

}


app.get('/', (req, res) => {
    res.send('Working Fine!');
});

app.get('/secret/:password', checkPassword, (req, res) => {
    res.send('This is top Secret!!')
})

app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});