const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

// Create
router.post('/users', UsersController.users_create);

// Read
router.get('/users', UsersController.users_list);

// Update
router.put('/users/:id', UsersController.users_edit);

// Delete
router.delete('/users/:id', UsersController.users_delete);

module.exports = router;
