const express = require('express');
require('dotenv').config();
const app = express();
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/authRoutes'); 

app.use(express.json());


app.use('/api', indexRoutes);
app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('Welcome to the Arithmetic API.');
  });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));