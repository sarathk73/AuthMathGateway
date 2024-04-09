const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many attempts at this endpoint. Please try again after 15 minutes.',
});

module.exports = authLimiter;