const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/e-com-db')
    .then(() => { console.log('e-com-db connected!!') })
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
    secret: 'weneedbettersecret',
    resave: false,
    saveUninitialized: true,
}))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser);

app.use((req, res, next)=>{
    res.locals.success = req.flash('success');
    next();
})

app.get('/', (req, res) => {
    res.send('Working Fine!');
});


// ------------- routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);


const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});