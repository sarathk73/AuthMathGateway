const handleSyntaxError = (error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
      return res.status(400).send({ message: 'Invalid JSON payload' });
    }
    next(error);
  };
  
  const handleValidationError = (error, req, res, next) => {
    if (error && error.error && error.error.isJoi) {
      return res.status(400).send({ message: error.error.toString() });
    }
    next(error);
  };
  
  const handleGenericError = (error, req, res, next) => {
    res.status(error.status || 500).send({ message: error.message || 'An unknown error occurred' });
  };
  
  module.exports = {
    handleSyntaxError,
    handleValidationError,
    handleGenericError,
  };