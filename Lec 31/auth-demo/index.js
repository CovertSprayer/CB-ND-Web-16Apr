const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo')
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res, next)=>{
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}, (req, res) => {
    // res.send('Working Fine!');
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register/new', (req, res) => {
    res.render('register');
});


app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const user = await User.findOne({ username });
    console.log(user);

    if (!user) {
        await User.create({ username, email, password });
        return res.redirect('/login');
    }

    return res.redirect('back');

});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
        if (user.password === password) {
            req.session.user_id = user._id;
            return res.redirect('/');
        }
        return res.redirect('/login');
    }

    return res.redirect('/register/new');

})


const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});