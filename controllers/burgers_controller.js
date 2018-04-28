var express = require('express');
var path = require('path');
var connection = require('../config/connection');
var orm = require('../config/orm');

//db elements
var table = 'burgers';
var name = 'burger_name';
var url = 'picurl';
var devouvred = 'devoured';
var devouredFlag = false;

var router = express.Router();

router.get('/', (req, res) => {
  var avail = {};
  avail.devouredFlag = devouredFlag;

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

router.post('/create', (req, res) => {
  orm.insertOne(
    table,
    [name, url],
    [req.body.burger_name, req.body.picurl],
    (data) => {
      res.redirect('/');
    }
  );
  // res.render('create', (req, res));
});

router.put('/api', (req, res) => {
  var condition = `id = ${req.body.id}`;
  orm.updateOne(table, { devoured: req.body.devoured }, condition, (data) => {
    devouredFlag = req.body.id ? true : false;

    res.redirect('/');
  });
});

module.exports = router;
