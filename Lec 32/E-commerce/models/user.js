const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
    },
    role:String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;