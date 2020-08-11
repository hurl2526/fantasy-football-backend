const mongoose = require('mongoose')

const QBSchema = new mongoose.Schema({
  playerId: {type:String},
  completions:{type:String},
  attempts:{type:String},
  passingYards:{type:String},
  passingTD:{type:String},
  passingInt:{type:String},
  rushAtt:{type:String},
  rushYards:{type:String},
  rushTD:{type:String},
  fumbles:{type:String},
  fantasyPoints:{type:String},
  displayName:{type:String},
  team:{type:String},

})

  module.exports = mongoose.model('QB', QBSchema)