const mongoose =require('mongoose');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const SECRET ='supersecret';


const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 99
    },
    token: {
        type: String
    }
});


/// hash password before saving
userSchema.pre('save', function(next){

    let user =this;

    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, (err, hashedPassword) => {
            if(err) return next(err);
            user.password =hashedPassword;
            next();
        });
    });

});

/// generate token
userSchema.methods.generateToken =function(cb){

    let user =this;

    let token =jwt.sign({ data: user._id }, SECRET);
    user.token =token;

    user.save((err, user) => {
        if(err) return cb(err);
        return cb(user);
    });

}


const User =mongoose.model('users', userSchema);

module.exports =User;