const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/results');
const { isAuthenticated } = require('../middleware/auth');
const validation = require('../middleware/validate');

// Public routes
router.get('/', resultsController.getAllResults);
router.get('/student/:studentId', resultsController.getResultsByStudent);

// Protected routes
router.post('/', isAuthenticated, validation.saveResult, resultsController.createResult);
router.put('/:id', isAuthenticated, validation.saveResult, resultsController.updateResult);
router.delete('/:id', isAuthenticated, resultsController.deleteResult);

module.exports = router;