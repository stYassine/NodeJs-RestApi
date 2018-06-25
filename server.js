const express =require('express');
const bodyParser =require('body-parser');
const mongoose =require('mongoose');
const app =express();

const PORT =process.env.PORT || 8080;


///////////////////////////////////////////////////
/// Connect TO Database
///////////////////////////////////////////////////
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/restApi')
    .then(db => {
        console.log('MongoDb Connected');
    })
    .catch(err => {
        console.log('MongoDb Error: ', err);
    });


///////////////////////////////////////////////////
/// Middlewares
///////////////////////////////////////////////////
app.use(bodyParser.json());



///////////////////////////////////////////////////
/// Routes
///////////////////////////////////////////////////
const users_routes =require('./routes/users');
const customers_routes =require('./routes/customers');
const genres_routes =require('./routes/genres');
const movies_routes =require('./routes/movies');
const rentals_routes =require('./routes/rentals');

app.use('/api/users', users_routes);
app.use('/api/customers', customers_routes);
app.use('/api/genres', genres_routes);
app.use('/api/movies', movies_routes);
app.use('/api/rentals', rentals_routes);




///////////////////////////////////////////////////
/// Listen To Server On Port 
///////////////////////////////////////////////////
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
        console.log(`Your Server Is Running On Port ${PORT}`);
});