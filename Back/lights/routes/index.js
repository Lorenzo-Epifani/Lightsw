var express = require('express');
var router = express.Router();
const path = require('path');
const app = express(); 
router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/light', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../data/Light.json'));
});

module.exports = router;
