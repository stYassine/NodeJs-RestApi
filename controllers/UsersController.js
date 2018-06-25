const User =require('../models/User');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const SECRET ='supersecret';

/// Register User
exports.register =async (request, response) => {

    let user =new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });

    ///let generateToken =await user.generateToken();

    await user.save();

    return response.status(200).send(user);

}

/// Login User
exports.login =async (request, response) => {

    /// check if email exists
    let user =await User.findOne({'email': request.body.email});

    if(!user){
        return response.status(400).send({msg: 'Email Not Found'});
    }

    /// compare password
    let comparePassword =bcrypt.compare(request.body.password, user.password);

    if(!comparePassword){
        return response.status(400).send({msg: 'Password Is Incorrect'});
    }

    /// send token on header
    let token =jwt.verify({ data: user._id }, SECRET);
    
    response.header('X-TOKEN', token).send({
        _id: user._id,
        name: user.name,
        email: user.email
    });

}

/// Logout
exports.logout =async (request, response) => {

    

}

/// Get All Users
exports.allUsers =async (request, response) => {

    let users =await User.find();

    return response.status(200).send(users);

}

/// Get Single User
exports.singleUser =async (request, response) => {

    let user =await User.findOne({ '_id': request.params.id });

    if(!user){
        return response.status().send({msg: 'User Not Found'});
    }

    return response.status(200).send(user);
}

/// Create User
exports.createUser =async (request, response) => {

    let user =await new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });

    await user.save();

    return response.status(200).send(user);

}


/// Update User
exports.updateUser =async (request, response) => {

    let user_id =request.params.id;
    let query ={
        name: request.body.name,
        email: request.body.email
    };

    if(request.body.password != null){
        query.password =request.body.password;
    }

    let user =await User.findByIdAndUpdate(user_id, query);

    return response.status(200).send(user);

}


/// Delete User
exports.deleteUser =async (request, response) => {

    let user_id =request.params.id;

    let user =await User.findByIdAndRemove(user_id);

    return response.status(200).send(user);

}