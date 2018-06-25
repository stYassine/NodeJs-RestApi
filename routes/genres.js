const express =require('express');
const router =express.Router();

const GenresController =require('../controllers/GenresController');

/// All genres
router.get('/', GenresController.allGenres);

/// Single genre
router.get('/single/:id', GenresController.singleGenre);

/// Create genre
router.post('/', GenresController.createGenre);

/// Update genre
router.put('/update/:id', GenresController.updateGenre);

/// Remove genre
router.delete('/delete/:id', GenresController.deleteGenre);


module.exports =router;