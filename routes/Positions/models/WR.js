const mongoose = require('mongoose');

const WRSchema = new mongoose.Schema({
  playerId: { type: String },
  rushAtt: { type: String },
  rushYards: { type: String },
  rushTD: { type: String },
  fumbles: { type: String },
  rec: {type:String},
  recYards: {type:String},
  recTD: {type:String},
  fantasyPoints: { type: String },
  displayName: { type: String },
  team: { type: String },
});

module.exports = mongoose.model('WR', WRSchema);
