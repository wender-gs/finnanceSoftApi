const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const TransactionsController = require('../controllers/TransactionsController');

//Users
// Create
router.post('/users', UsersController.users_create);

// Read
router.get('/users', UsersController.users_list);

// Update
router.put('/users/:id', UsersController.users_edit);

// Delete
router.delete('/users/:id', UsersController.users_delete);

//Transactions

// Create
router.post('/transactions', TransactionsController.transaction_create);

//Read to a single user
router.get('/transactions/:id', TransactionsController.transactions_list);

module.exports = router;
