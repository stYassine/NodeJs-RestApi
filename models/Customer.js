const mongoose =require('mongoose');

const customerSchema =new mongoose.Schema({
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

const Customer =mongoose.model('customers', customerSchema);


module.exports =Customer;