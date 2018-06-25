const express =require('express');
const router =express.Router();

const UsersController =require('../controllers/UsersController');

/// Register
router.post('/register', UsersController.register);

/// Login
router.post('/login', UsersController.register);

/// All Users
router.get('/', UsersController.allUsers);

/// Single User
router.get('/single/:id', UsersController.singleUser);

/// Update User
router.put('/update/:id', UsersController.updateUser);

/// Remove
router.delete('/delete/:id', UsersController.deleteUser);


module.exports =router;