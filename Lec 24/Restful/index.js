const express = require('express');
const app = express();
const path = require('path');
const users = require('./data/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.send('working fine');
    res.render('home');
});

app.get('/users', (req, res) => {
    res.render('user', { users })
})

app.get('/user/new', (req, res) => {
    res.render('new')
});

app.post('/users', (req, res) => {
    const { username, password, age, address } = req.body;

    users.push({
        id:users.length + 1,
        username,
        password,
        age,
        address
    });

    
    // res.send(users);
    res.redirect('/users');

});


app.get('/users/:id', (req, res)=>{
    const { id } = req.params;

    const user = users.find((user)=>{
        return user.id == id;
    })
    
    // res.send(user);
    res.render('show', {user});

})



const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at PORT', PORT);
})