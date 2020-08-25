const express = require('express');
const router = express.Router();
const positionController = require('./controllers/positionController');

router.get('/Rankings', positionController.rankings);
router.get('/QB', positionController.rankQB);
router.get('/RB', positionController.rankRB);
router.get('/WR', positionController.rankWR);
router.get('/TE', positionController.rankTE);
router.get('/single/:id', positionController.single);
router.get('/singleQB/:id', positionController.singleQB);
router.get('/singleRB/:id', positionController.singleRB);
router.get('/singleWR/:id', positionController.singleWR);
router.get('/singleTE/:id', positionController.singleTE);
router.get('/Team:team', positionController.team);

/* GET home page. */
// router.get('/Rankings', (req, res, next) => {
//   Rankings.find().then((rankings)=>{
//     if(rankings.length){
//     return res.status(200).json({ rankings})
//     }
//     return res.send('No Rankings Found')
//   }).catch((err)=>{
//     next(err);
//   })
// });

// router.get('/QB', (req, res, next) => {
//   QB.find().then((qbs)=>{
//     if(qbs.length){
//     return res.status(200).json({ qbs})
//     }
//     return res.send('No QBs Found')
//   }).catch((err)=>{
//     next(err);
//   })
// });
// router.get('/RB', (req, res, next) => {
//   RB.find().then((rbs)=>{
//     if(rbs.length){
//     return res.status(200).json({ rbs})
//     }
//     return res.send('No RBs Found')
//   }).catch((err)=>{
//     next(err);
//   })
// });
// router.get('/WR', (req, res, next) => {
//   WR.find().then((wrs)=>{
//     if(wrs.length){
//     return res.status(200).json({ wrs})
//     }
//     return res.send('No WRs Found')
//   }).catch((err)=>{
//     next(err);
//   })
// });
// router.get('/TE', (req, res, next) => {
//   TE.find().then((tes)=>{
//     if(tes.length){
//     return res.status(200).json({ tes})
//     }
//     return res.send('No TEs Found')
//   }).catch((err)=>{
//     next(err);
//   })
// });

// router.get('/single/:id', (req, res) => {
//   Rankings.findById({ _id: req.params.id }).then((player) => {
//     return res.json(player);
//   });
// });
// router.get('/singleQB/:id', (req, res) => {
//   QB.findById({ _id: req.params.id }).then((player) => {
//     return res.json(player);
//   });
// });
// router.get('/singleRB/:id', (req, res) => {
//   RB.findById({ _id: req.params.id }).then((player) => {
//     return res.json(player);
//   });
// });
// router.get('/singleWR/:id', (req, res) => {
//   WR.findById({ _id: req.params.id }).then((player) => {
//     return res.json(player);
//   });
// });
// router.get('/singleTE/:id', (req, res) => {
//   TE.findById({ _id: req.params.id }).then((player) => {
//     return res.json(player);
//   });
// });

// router.get('/Team/:team', (req, res) => {
//   Rankings.find({ team: req.params.team }).then((players) => {
//     return res.json(players);
//   });
// });

// router.get('/single-QB/:id', (req, res, next) => {
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
