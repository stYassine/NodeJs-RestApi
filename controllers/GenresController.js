const Genre =require('../models/Genre');

/// Get All Genres
exports.allGenres =async (request, response) => {

    let genres =await Genre.find();

    return response.status(200).send(genres);

}


/// Get Single Genre
exports.singleGenre =async (request, response) => {

    let genre =await Genre.findOne({ '_id': request.params.id });

    if(!genre){
        return response.status().send({msg: 'Genre Not Found'});
    }

    return response.status(200).send(genre);
}

/// Create Genre
exports.createGenre =async (request, response) => {

    let genre =await new Genre({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });

    await genre.save();

    return response.status(200).send(genre);

}


/// Update Genre
exports.updateGenre =async (request, response) => {

    let genre_id =request.params.id;
    let query ={
        name: request.body.name,
        email: request.body.email
    };

    if(request.body.password != null){
        query.password =request.body.password;
    }

    let genre =await Genre.findByIdAndUpdate(genre_id, query);

    return response.status(200).send(genre);

}


/// Delete Genre
exports.deleteGenre =async (request, response) => {

    let genre_id =request.params.id;

    let genre =await Genre.findByIdAndRemove(genre_id);

    return response.status(200).send(genre);

}