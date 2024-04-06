// Define the functions for arithmetic operations
exports.add = (req, res) => {
    const { number1, number2 } = req.body;
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).send({ error: 'Invalid input numbers' });
    }
    const result = number1 + number2;
    res.json({ result  });
  };
  
  exports.subtract = (req, res) => {
    const { number1, number2 } = req.body;
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).send({ error: 'Invalid input numbers' });
    }
    const result = number1 - number2;
    res.json({ result });
  };
  
  exports.multiply = (req, res) => {
    const { number1, number2 } = req.body;
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).send({ error: 'Invalid input numbers' });
    }
    const result = number1 * number2;
    res.json({ result });
  };
  
  exports.divide = (req, res) => {
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
  };