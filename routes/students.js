const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/auth');

// Public routes
router.get('/', studentsController.getAllStudents);
router.get('/:id', studentsController.getSingleStudent);

// Protected routes
router.post('/', isAuthenticated, validation.saveStudent, studentsController.createStudent);
router.put('/:id', isAuthenticated, validation.saveStudent, studentsController.updateStudent);
router.delete('/:id', isAuthenticated, studentsController.deleteStudent);

module.exports = router;