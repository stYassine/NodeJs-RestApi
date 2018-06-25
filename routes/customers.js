const express =require('express');
const router =express.Router();

const CustomersController =require('../controllers/CustomersController');

/// All customers
router.get('/', CustomersController.allCustomers);

/// Single customer
router.get('/single/:id', CustomersController.singleCustomer);

/// Create customer
router.post('/', CustomersController.createCustomer);

/// Update customer
router.put('/update/:id', CustomersController.updateCustomer);

/// Remove customer
router.delete('/delete/:id', CustomersController.deleteCustomer);

module.exports =router;