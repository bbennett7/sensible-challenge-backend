var express = require('express');
var router = express.Router();
const darkskyController = require('../controllers/darksky');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getTomorrowsForecast/:locationTime', darkskyController.getTomorrowsForecast)

module.exports = router;
