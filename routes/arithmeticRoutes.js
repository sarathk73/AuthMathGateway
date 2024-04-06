const express = require('express');
const router = express.Router();
const arithmeticController = require('../controllers/arithmeticController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, arithmeticController.add);
router.post('/subtract', authMiddleware, arithmeticController.subtract);
router.post('/multiply', authMiddleware, arithmeticController.multiply);
router.post('/divide', authMiddleware, arithmeticController.divide);

module.exports = router;