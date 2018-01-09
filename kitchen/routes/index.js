var express = require('express');
var router = express.Router();

var suppliesController = require('../controllers/suppliesController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/supplies', suppliesController.index);

module.exports = router;
