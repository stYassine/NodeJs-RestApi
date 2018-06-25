const mongoose =require('mongoose');


/** Customer Schema **/
let customerSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    is_gold: {
        type: Boolean,
        required: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 50
    }
});

/** Movie Schema **/
let movieSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    daily_rental_rate: {
        type: String,
        required: true,
        min: 0,
        max: 255
    }
});


const rentalSchema =new mongoose.Schema({
    customer: {
        type: customerSchema,
        required: true
    },
    movie: {
        type: movieSchema,
        required: true
    },
    date_out: {
        type: Data,
        required: true,
        default: Date.now()
    },
    date_returned: {
        type: Date
    },
    reltal_fee: {
        type: Number,
        min: 0
    }
});

const Rental =mongoose.model('rentals', rentalSchema);


module.exports =Rental;