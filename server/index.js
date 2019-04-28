const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const helmet = require('helmet');

const PORT = process.env.PORT || 7000;

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(
  config.mongoURI,
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
    useFindAndModify: false
  },
);

require('./models/yo');
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

require('./routes/yo')(app);
require('./services/cache');

app.listen(PORT, () => {
  console.log("Yo API running on port " + PORT);
});
