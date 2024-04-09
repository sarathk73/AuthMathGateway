const Joi = require('joi');

const { arithmeticOperationSchema } = require('../validations/validationSchemas');

const validateArithmeticOperation = (req, res, next) => {
  const { value, error } = arithmeticOperationSchema.validate(req.body);
  if (error) {
    const err = new Error('Validation failed');
    err.error = error;
    err.status = 400;
    return next(err); 
  }
  req.body = value; 
  next(); 
};

exports.add = [validateArithmeticOperation, (req, res) => {
  const { number1, number2 } = req.body;
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).send({ error: 'Invalid input numbers' });
    }
    const result = number1 + number2;
    res.json({ result  });
}];

exports.subtract = [validateArithmeticOperation, (req, res) => {
  const { number1, number2 } = req.body;
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).send({ error: 'Invalid input numbers' });
    }
    const result = number1 - number2;
    res.json({ result });
}];

exports.multiply = [validateArithmeticOperation, (req, res) => {
  const { number1, number2 } = req.body;
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).send({ error: 'Invalid input numbers' });
    }
    const result = number1 * number2;
    res.json({ result });
}];

exports.divide = [validateArithmeticOperation, (req, res) => {
  const { number1, number2 } = req.body;
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).send({ error: 'Invalid input numbers' });
    }
    if (number2 === 0) {
      return res.status(400).json({ error: "Cannot divide by zero." });
    } else {
      const result = number1 / number2;
      res.json({ result });
    }
}];