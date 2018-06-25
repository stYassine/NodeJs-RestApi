const express =require('express');
const router =express.Router();

const MoviesController =require('../controllers/MoviesController');

/// All movies
router.get('/', MoviesController.allMovies);

/// Single movie
router.get('/single/:id', MoviesController.singleMovie);

/// Create movie
router.post('/', MoviesController.createMovie);

/// Update movie
router.put('/update/:id', MoviesController.updateMovie);

/// Remove movie
router.delete('/delete/:id', MoviesController.deleteMovie);


module.exports =router;