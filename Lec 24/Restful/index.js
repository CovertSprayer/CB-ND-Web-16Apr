const express = require('express');
const app = express();
const path = require('path');
const users = require('./data/users');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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
        id: users.length + 1,
        username,
        password,
        age,
        address
    });

    // res.send(users);
    res.redirect('/users');
});


app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => {
        return user.id == id;
    })

    // res.send(user);
    res.render('show', { user });

});

app.get('/users/:id/edit', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);

    res.render('edit', { user });
});

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, age, address } = req.body;

    const user = users.find(user => user.id == id);

    user.username = username;
    user.age = age;
    user.address = address;

    res.redirect('/users');
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    const index = users.indexOf(user);

    users.splice(index, 1);

    res.redirect('/users');
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at PORT', PORT);
})