var express = require('express');
var router = express.Router();

var suppliesController = require('../controllers/suppliesController')
var appliancesController = require('../controllers/appliancesController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/supplies', 						suppliesController.index);
router.get('/supplies/:storeLocation(\\w+)',	suppliesController.store);

router.get('/appliances',						appliancesController.index)

module.exports = router;
