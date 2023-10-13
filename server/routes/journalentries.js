const express = require('express');
const pool = require('../modules/pool'); 

const router = express.Router();

// Create a new journal entry
router.post('/entries', (req, res) => {
  const {
    date,
    content,
    daily_affirmation,
    user_id, 
    is_related_to_love,
    is_related_to_confidence,
    is_related_to_self_esteem,
    is_related_to_relationship,
    is_related_to_attitude,
    is_related_to_health,
    is_related_to_gratitude,
    is_related_to_exercise,
    is_related_to_forgiveness,
  } = req.body;

  const queryText = `
    INSERT INTO journal_entries (date, content, daily_affirmation, user_id,
      is_related_to_love, is_related_to_confidence, is_related_to_self_esteem,
      is_related_to_relationship, is_related_to_attitude, is_related_to_health,
      is_related_to_gratitude, is_related_to_exercise, is_related_to_forgiveness)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING id
  `;

  pool
    .query(queryText, [
      date,
      content,
      daily_affirmation,
      user_id, 
      is_related_to_love,
      is_related_to_confidence,
      is_related_to_self_esteem,
      is_related_to_relationship,
      is_related_to_attitude,
      is_related_to_health,
      is_related_to_gratitude,
      is_related_to_exercise,
      is_related_to_forgiveness,
    ])
    .then((result) => {
      res.status(201)
      console.log ('Journal entry created', id: result.rows[0].id );
    })
    .catch((error) => {
      res.status(500)
      console.error('error creating journal entry:', error);
    });
});

// get all journal entries from users
router.get('/entries/:user_id', (req, res) => {
  const user_id = req.params.user_id;

  const queryText = 'SELECT * FROM journal_entries WHERE user_id = $1';

  pool
    .query(queryText, [user_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      res.status(500)
      console.error('error retrieving journal entry:', error);
    });
});

// Update a journal entry by id
router.put('/entries/:id', (req, res) => {
  const entryId = req.params.id;

  // Update the entry field in req.body
  const {
    date,
    content,
    daily_affirmation,
    is_related_to_love,
    is_related_to_confidence,
    is_related_to_self_esteem,
    is_related_to_relationship,
    is_related_to_attitude,
    is_related_to_health,
    is_related_to_gratitude,
    is_related_to_exercise,
    is_related_to_forgiveness,
  } = req.body;

  const queryText = `
    UPDATE journal_entries
    SET date = $1, content = $2, daily_affirmation = $3,
    is_related_to_love = $4, is_related_to_confidence = $5,
    is_related_to_self_esteem = $6, is_related_to_relationship = $7,
    is_related_to_attitude = $8, is_related_to_health = $9,
    is_related_to_gratitude = $10, is_related_to_exercise = $11,
    is_related_to_forgiveness = $12
    WHERE id = $13
  `;

  pool
    .query(queryText, [
      date,
      content,
      daily_affirmation,
      is_related_to_love,
      is_related_to_confidence,
      is_related_to_self_esteem,
      is_related_to_relationship,
      is_related_to_attitude,
      is_related_to_health,
      is_related_to_gratitude,
      is_related_to_exercise,
      is_related_to_forgiveness,
      entryId,
    ])
    .then(() => {
      res.status(200)
    })
    .catch((error) => {
      res.status(500);
      console.error('error updating journal entry:', error);
    });
});

// Delete a journal entry by id
router.delete('/entries/:id', (req, res) => {
  const entryId = req.params.id;

  const queryText = 'DELETE FROM journal_entries WHERE id = $1';

  pool
    .query(queryText, [entryId])
    .then(() => {
      res.status(200);
    })
    .catch((error) => {  
      res.status(500);
      console.error('error deleting journal entry:', error);
    });
});




module.exports = router;
