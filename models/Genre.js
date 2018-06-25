const mongoose =require('mongoose');

const genreSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
});

const Genre =mongoose.model('genres', genreSchema);

module.exports =genreSchema;
module.exports =Genre;