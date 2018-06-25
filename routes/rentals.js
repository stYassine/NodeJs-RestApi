const express =require('express');
const router =express.Router();

const RentalsController =require('../controllers/RentalsController');

/// All movies
router.get('/', RentalsController.allRental);

/// Single movie
router.get('/single/:id', RentalsController.singleRental);

/// Create movie
router.post('/', RentalsController.createRental);

/// Update movie
router.put('/update/:id', RentalsController.updateRental);

/// Remove movie
router.delete('/delete/:id', RentalsController.deleteRental);


module.exports =router;