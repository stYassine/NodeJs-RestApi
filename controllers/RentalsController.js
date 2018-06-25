const Rental =require('../models/Rental');


/// Get All Rentals
exports.allRental =async (request, response) => {

    let customers =await Rental.find();

    return response.status(200).send(customers);

}


/// Get Single Rental
exports.singleRental =async (request, response) => {

    let rental =await Rental.findOne({ '_id': request.params.id });

    if(!genre){
        return response.status(400).send({msg: 'Genre Not Found'});
    }

    return response.status(200).send(rental);
}

/// Create Rental
exports.createRental =async (request, response) => {

    let rental =await new Rental({
        name: request.body.name,
        is_gold: request.body.is_gold,
        phone: request.body.phone
    });

    await rental.save();

    return response.status(200).send(rental);

}


/// Update Rental
exports.updateRental =async (request, response) => {

    let rental_id =request.params.id;
    let query ={
        name: request.body.name,
        is_gold: request.body.is_gold,
        phone: request.body.phone
    };

    let rental =await Rental.findByIdAndUpdate(rental_id, query);

    return response.status(200).send(rental);

}


/// Delete Rental
exports.deleteRental =async (request, response) => {

    let rental_id =request.params.id;

    let rental =await Rental.findByIdAndRemove(rental_id);

    return response.status(200).send(rental);

}