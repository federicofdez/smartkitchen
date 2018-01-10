var express = require('express');
var router = express.Router();

var suppliesController = require('../controllers/suppliesController');
var appliancesController = require('../controllers/appliancesController');

var  Supply = require('../models/supplies');

/* GET home page. */
router.get('/', function(req, res, next) {
	Supply.find({}, function(err, supplies){
		var fridgeSupplies = [];
		var freezerSupplies = [];
		var cupboardSupplies = [];
		for (var i=0; i<supplies.length; i++){
			console.log(supplies[i].name);
			supplies[i].percentage = supplies[i].value/supplies[i].desired;
			if (supplies[i].location == 'fridge'){
				fridgeSupplies.push(supplies[i]);
			}
			else if (supplies[i].location == 'freezer'){
				freezerSupplies.push(supplies[i]);
			}
			else if (supplies[i].location == 'cupboard'){
				cupboardSupplies.push(supplies[i]);
			}
		}
		res.render('index', {
			fridgeSupplies: fridgeSupplies,
			freezerSupplies: freezerSupplies,
			cupboardSupplies: cupboardSupplies
		});
	});
});

router.get('/supplies', 						suppliesController.index);
router.get('/supplies/:storeLocation(\\w+)',	suppliesController.store);
router.get('/supplies/:supplyName(\\w+)/buy',		suppliesController.buy)

router.get('/appliances',						appliancesController.index)

module.exports = router;
