 const express = require('express');
const router = express.Router();
const arithmeticRoutes = require('./arithmeticRoutes');
const authRoutes = require('./authRoutes'); 

    /**
 * @swagger
 * /arithmetic/add:
 *   post:
 *     summary: Adds two numbers
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number1:
 *                 type: number
 *               number2:
 *                 type: number
 *             required:
 *               - number1
 *               - number2
 *     responses:
 *       200:
 *         description: The sum of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       400:
 *         description: Invalid input numbers
 */
/**
 * @swagger
 * /arithmetic/subtract:
 *   post:
 *     summary: Subtracts the second number from the first
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number1:
 *                 type: number
 *               number2:
 *                 type: number
 *             required:
 *               - number1
 *               - number2
 *     responses:
 *       200:
 *         description: The result of the subtraction
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       400:
 *         description: Invalid input numbers
 */
/**
 * @swagger
 * /arithmetic/multiply:
 *   post:
 *     summary: Multiplies two numbers
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number1:
 *                 type: number
 *               number2:
 *                 type: number
 *             required:
 *               - number1
 *               - number2
 *     responses:
 *       200:
 *         description: The product of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       400:
 *         description: Invalid input numbers
 */

 /**
 * @swagger
 * /arithmetic/divide:
 *   post:
 *     summary: Divides the first number by the second
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number1:
 *                 type: number
 *               number2:
 *                 type: number
 *             required:
 *               - number1
 *               - number2
 *     responses:
 *       200:
 *         description: The quotient of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       400:
 *         description: Invalid input numbers
 *       422:
 *         description: Division by zero error
 */

router.use('/arithmetic', arithmeticRoutes);
router.use('/auth', authRoutes); 

module.exports = router;