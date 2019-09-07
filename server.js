const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();

// Models
const items = require('./routes/api/items');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
//const db = require('./config/keys').mongoURI;
const db = process.env.MONGODB_URI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  // Use Routes | '/api/items' refers to the 'items' variable defined above to access the 'items.js' routes file
  app.use('/api/items', items)

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
