    
    const express = require('express');
    const router = express.Router();
    const arithmeticRoutes = require('./arithmeticRoutes');
    const authRoutes = require('./authRoutes'); 

    
    router.use('/arithmetic', arithmeticRoutes);
    router.use('/auth', authRoutes); 

    module.exports = router;