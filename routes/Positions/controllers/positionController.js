const express = require('express');
// const router = express.Router();
const Rankings = require('../models/Rankings');
const QB = require('../models/QB');
const RB = require('../models/RB');
const WR = require('../models/WR');
const TE = require('../models/TE');

module.exports = {
  rankings: (req, res, next) => {
    Rankings.find()
      .then((rankings) => {
        if (rankings.length) {
          return res.status(200).json({ rankings });
        }
        return res.send('No Rankings Found');
      })
      .catch((err) => {
        next(err);
      });
  },
  rankQB: (req, res, next) => {
    QB.find()
      .then((qbs) => {
        if (qbs.length) {
          return res.status(200).json({ qbs });
        }
        return res.send('No QBs Found');
      })
      .catch((err) => {
        next(err);
      });
  },

  rankRB: (req, res, next) => {
    RB.find()
      .then((rbs) => {
        if (rbs.length) {
          return res.status(200).json({ rbs });
        }
        return res.send('No RBs Found');
      })
      .catch((err) => {
        next(err);
      });
  },

  rankWR: (req, res, next) => {
    WR.find()
      .then((wrs) => {
        if (wrs.length) {
          return res.status(200).json({ wrs });
        }
        return res.send('No WRs Found');
      })
      .catch((err) => {
        next(err);
      });
  },

  rankTE: (req, res, next) => {
    TE.find()
      .then((tes) => {
        if (tes.length) {
          return res.status(200).json({ tes });
        }
        return res.send('No TEs Found');
      })
      .catch((err) => {
        next(err);
      });
  },

  single: (req, res) => {
    Rankings.findById({ _id: req.params.id }).then((player) => {
      return res.json(player);
    });
  },

  singleQB: (req, res) => {
    QB.findById({ _id: req.params.id }).then((player) => {
      return res.json(player);
    });
  },

  singleRB: (req, res) => {
    RB.findById({ _id: req.params.id }).then((player) => {
      return res.json(player);
    });
  },

  singleWR: (req, res) => {
    WR.findById({ _id: req.params.id }).then((player) => {
      return res.json(player);
    });
  },

  singleTE: (req, res) => {
    TE.findById({ _id: req.params.id }).then((player) => {
      return res.json(player);
    });
  },

  team: (req, res) => {
    Rankings.find({ team: req.params.team }).then((players) => {
      return res.json(players);
    });
  },
};
