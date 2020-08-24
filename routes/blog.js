const express = require('express');
const router = express.Router();
const Blog = require('./Positions/models/Blog');

router.post('/create', (req, res) => {
  const newBlog = new Blog();
  newBlog.name = req.body.name;
  newBlog.round = req.body.round;
  newBlog.name2 = req.body.name2;
  newBlog.round2 = req.body.round2;
  newBlog.save().then((blog) => {
    return res.json(blog);
  });
});

router.get('/all', (req, res) => {
  Blog.find({}).then((blogs) => {
    blogs.reverse();
    return res.json(blogs);
  });
});



module.exports = router;
