const express = require('express');
const language = require('../models/language');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { list: language.getAll() });
});

module.exports = router;
