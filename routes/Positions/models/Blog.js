const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  round: { type: String, default: ''},
  name2: { type: String, default: '' },
  round2: { type: String, default: '' },
});

module.exports = mongoose.model('Blog', BlogSchema);