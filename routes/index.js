const express = require('express');
const router = express.Router();

router.use('/students', require('./students'));
router.use('/teachers', require('./teachers'));
router.use('/classes', require('./classes'));
router.use('/results', require('./results'));
router.use('/auth', require('./auth'));
router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  res.json({
    message: "EduTrack Africa API is running successfully!",
    documentation: "/api-docs"
  });
});

module.exports = router;