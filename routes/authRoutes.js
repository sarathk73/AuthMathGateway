const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


const users = [
 
  { id: 1, username: 'user1', password: 'pass1' },
  
];

router.post('/authenticate', (req, res) => {
 
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
   
    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
  } else {
   
    res.status(401).json({ message: 'Authentication failed' });
  }
});

module.exports = router;