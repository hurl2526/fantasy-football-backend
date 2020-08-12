const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema({
  playerId: { type: String },
  position: { type: String },
  displayName: { type: String },
  fname: { type: String },
  lname: { type: String },
  team: { type: String },
  byeWeek: { type: String },
  standDev: { type: String },
  nerdRank: { type: String },
  positionRank: { type: String },
  overallRank: { type: Number },
});

module.exports = mongoose.model('Ranking', RankingSchema);
