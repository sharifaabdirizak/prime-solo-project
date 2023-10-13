const express = require('express');
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');
const userRouter = require('./routes/user.router');
const journalEntriesRouter = require('./routes/journal_entries.router');

const pool = require('./database/pool');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

// Routers
app.use('/api/user', userRouter); 
app.use('/api/journal_entries', journalEntriesRouter); 



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



