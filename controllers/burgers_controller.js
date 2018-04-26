var express = require('express');
var path = require('path');
var connection = require('../config/connection');
var orm = require('../config/orm');

//db elements
var table = 'burgers';
var name = 'burger_name';
var url = 'pic_url';
var devouvred = 'devoured';

var router = express.Router();

router.get('/', (req, res) => {
  var avail = {};

  orm.selectWhere(table, devouvred, false, (data) => {
    avail.avail_burgers = data;
  });
  orm.selectWhere(table, devouvred, true, (data) => {
    avail.consumed_burgers = data;

    res.render('index', avail);
  });
});

router.get('/create', (req, res) => {
  res.render('create', (req, res));
});

module.exports = router;
