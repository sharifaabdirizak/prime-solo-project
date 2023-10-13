const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Create a new user
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      console.log('Incomplete registration data');
      return res.status(400).send('Incomplete registration data');
    }

    const hashedPassword = encryptPassword(password);

    const result = await pool.query(
      'INSERT INTO "user" (username, password, email) VALUES ($1, $2, $3) RETURNING id',
      [username, hashedPassword, email]
    );

    console.log('User registered');
    return res.status(201).
    send(result.rows[0].id);
  } catch (error) {
    console.error('Error registering user:', error);
    return res.sendStatus(500);
  }
});



module.exports = router;
