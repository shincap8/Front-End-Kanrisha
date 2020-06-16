const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://localhost/kanrisha';

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log('Database conected'));
