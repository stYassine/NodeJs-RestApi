const mongoose =require('mongoose');

let genreSchema =require('./Genre');

const movieSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    genre: {
        type: genreSchema,
        required: true
    },
    number_in_stock: {
        type: String,
        required: true,
        min: 0,
        max: 255
    },
    daily_rental_rate: {
        type: String,
        required: true,
        min: 0,
        max: 255
    },
    
});

const Movie =mongoose.model('movies', movieSchema);


module.exports =Movie;