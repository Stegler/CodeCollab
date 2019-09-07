const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Models
const items = require('./routes/api/items');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:Password123@ds219078.mlab.com:19078/heroku_6kjvbl97")
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

  // Use Routes | '/api/items' refers to the 'items' variable defined above to access the 'items.js' routes file
  app.use('/api/items', items)

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
