const express = require('express');
const router = express.Router();
const QB = require('./models/QB')
const RB = require('./models/RB')
const WR = require('./models/WR')
const TE = require('./models/TE')

/* GET home page. */
router.get('/QB', (req, res, next) => {
  QB.find().then((qbs)=>{
    if(qbs.length){
    return res.status(200).json({ qbs})
    }
    return res.send('No QBs Found')
  }).catch((err)=>{
    next(err);
  })
});
router.get('/RB', (req, res, next) => {
  RB.find().then((rbs)=>{
    if(rbs.length){
    return res.status(200).json({ rbs})
    }
    return res.send('No RBs Found')
  }).catch((err)=>{
    next(err);
  })
});
router.get('/WR', (req, res, next) => {
  WR.find().then((wrs)=>{
    if(wrs.length){
    return res.status(200).json({ wrs})
    }
    return res.send('No WRs Found')
  }).catch((err)=>{
    next(err);
  })
});
router.get('/TE', (req, res, next) => {
  TE.find().then((tes)=>{
    if(tes.length){
    return res.status(200).json({ tes})
    }
    return res.send('No TEs Found')
  }).catch((err)=>{
    next(err);
  })
});

// router.get('/single-QB/:word', (req, res, next) => {
//   Word.findOne({word:req.params.word}).populate('comments').exec((err,word)=>{
//     res.json({word})
//   })
//   // .then((word)=>{
//   //   if(word){
//   //   return res.status(200).json({ word})
//   //   }
//   //   return res.send('No Words Found')
//   // }).catch((err)=>{
//   //   next(err);
//   });

module.exports = router;