const Movie =require('../models/Movie');


/// Get All Movies
exports.allMovies =async (request, response) => {

    let customers =await Customer.find();

    return response.status(200).send(customers);

}


/// Get Single Movie
exports.singleMovie =async (request, response) => {

    let customer =await Customer.findOne({ '_id': request.params.id });

    if(!genre){
        return response.status(400).send({msg: 'Genre Not Found'});
    }

    return response.status(200).send(customer);
}

/// Create Movie
exports.createMovie =async (request, response) => {

    let customer =await new Customer({
        name: request.body.name,
        is_gold: request.body.is_gold,
        phone: request.body.phone
    });

    await customer.save();

    return response.status(200).send(customer);

}


/// Update Movie
exports.updateMovie =async (request, response) => {

    let customer_id =request.params.id;
    let query ={
        name: request.body.name,
        is_gold: request.body.is_gold,
        phone: request.body.phone
    };

    let customer =await Customer.findByIdAndUpdate(customer_id, query);

    return response.status(200).send(customer);

}


/// Delete Movie
exports.deleteMovie =async (request, response) => {

    let customer_id =request.params.id;

    let customer =await Genre.findByIdAndRemove(customer_id);

    return response.status(200).send(customer);

}