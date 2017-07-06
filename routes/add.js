const express = require('express');
const language = require('../models/language');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', { list: language.getAll() });
});

router.post('/', function(req, res, next) {
  const { name, comment } = req.body;
  language.addLanguage(name, comment);
  res.redirect('/');
});

module.exports = router;
