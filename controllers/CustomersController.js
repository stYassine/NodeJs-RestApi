const Customer =require('../models/Customer');


/// Get All Customers
exports.allCustomers =async (request, response) => {

    let customers =await Customer.find();

    return response.status(200).send(customers);

}


/// Get Single Customer
exports.singleCustomer =async (request, response) => {

    let customer =await Customer.findOne({ '_id': request.params.id });

    if(!genre){
        return response.status(400).send({msg: 'Genre Not Found'});
    }

    return response.status(200).send(customer);
}

/// Create Customer
exports.createCustomer =async (request, response) => {

    let customer =await new Customer({
        name: request.body.name,
        is_gold: request.body.is_gold,
        phone: request.body.phone
    });

    await customer.save();

    return response.status(200).send(customer);

}


/// Update Customer
exports.updateCustomer =async (request, response) => {

    let customer_id =request.params.id;
    let query ={
        name: request.body.name,
        is_gold: request.body.is_gold,
        phone: request.body.phone
    };

    let customer =await Customer.findByIdAndUpdate(customer_id, query);

    return response.status(200).send(customer);

}


/// Delete Customer
exports.deleteCustomer =async (request, response) => {

    let customer_id =request.params.id;

    let customer =await Customer.findByIdAndRemove(customer_id);

    return response.status(200).send(customer);

}