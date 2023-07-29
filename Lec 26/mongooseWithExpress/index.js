const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/myDB')
    .then(() => { console.log('myDB connected!') })
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    contact: Number
});

const User = mongoose.model('User', userSchema);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('Working Fine!');
});

app.get('/users', async (req, res) => {
    const users = await User.find({});
    res.render('index', { users });
});

app.get('/user/new', (req, res) => {
    res.render('new');
});

app.post('/users', async (req, res) => {
    const { name, email, age, contact } = req.body;
    await User.create({ name, email, age, contact });

    res.redirect('/users');
});


app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.redirect('/users');
})



app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});