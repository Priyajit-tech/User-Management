const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Display all users
router.get('/', usersController.getAllUsers);

// Display one user by ID
router.get('/identity', usersController.getUserById);

// NewUser
router.post('/NewUser', usersController.NewUser);

module.exports = router;