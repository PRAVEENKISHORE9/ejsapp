var express = require('express');
var router = express.Router();
var app = express();
app.use('/static', express.static('public'))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' World' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: ' World' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: ' World' });
});

module.exports = router;
