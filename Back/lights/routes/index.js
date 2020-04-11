var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();
var fs = require('fs');
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

router.post('/light/event_0', function(req, res, next) {
    var fileName = path.join(__dirname, '../data/Light.json');
    const file = require(fileName);
    file.light[0] += 1;
    file.light[1] = !file.light[1];


    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
      if (err) return console.log(err);
      console.log(JSON.stringify(file));
      console.log('writing to ' + fileName);
    });
    res.sendStatus(200)

});

module.exports = router;
