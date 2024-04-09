const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { handleSyntaxError, handleValidationError, handleGenericError } = require('./middlewares/errorHandlers');
require('dotenv').config();
const { swaggerUi, specs } = require('./swaggerConfig');
const authLimiter = require('./middlewares/rateLimit');
const app = express();
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/authRoutes'); 

app.use(helmet());

app.use(express.json());

app.use(handleSyntaxError);

app.use(handleValidationError);

app.use(handleGenericError);

app.use(morgan('combined'));

app.use(cors()); //set options not now

app.use('/api/auth', authLimiter);

app.use('/api', indexRoutes);
app.use('/api/auth', authRoutes);

console.log('Setting up Swagger Docs');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
console.log('Swagger Docs setup complete');

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('Welcome to the Arithmetic API.');
  });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));