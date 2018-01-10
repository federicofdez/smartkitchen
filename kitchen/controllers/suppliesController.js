var Supply = require('../models/supplies');
var Purchase = require('../models/purchases');
var amazon = require('amazon-product-api');
var request = require('request');

var awsId = "AKIAILZUYJMQV4SVDSBA",
	awsSecret = "gd1bXFLAsFMG45QsvVOgem6F7IqrCN9BVsWXSJe4",
	awsTag = "sampleiotapps-21";

var amazonClient = amazon.createClient({
  awsId: awsId,
  awsSecret: awsSecret,
  awsTag: awsTag
});

// GET /supplies
exports.index = function(req, res, next){
	Supply.find({}, function(err, supplies){
		var fridgeSupplies = [];
		var freezerSupplies = [];
		var cupboardSupplies = [];
		for (var i=0; i<supplies.length; i++){
			supplies[i].percentage = supplies[i].value/supplies[i].desired;
			if (supplies[i].location == 'fridge')
				fridgeSupplies.push(supplies[i]);
			else if (supplies[i].location == 'freezer')
				freezerSupplies.push(supplies[i]);
			else if (supplies[i].location == 'cupboard')
				cupboardSupplies.push(supplies[i]);
		}
		res.render('supplies/index', {
			pageTitle: "All Supplies in the Kitchen",
			supplies: supplies,
			fridgeSupplies: fridgeSupplies,
			freezerSupplies: freezerSupplies,
			cupboardSupplies: cupboardSupplies,
			errorMessage: req.query.error !== "" ? req.query.error : undefined,
			suppliesMessage: req.query.suppliesMessage !== "" ? req.query.suppliesMessage : undefined,
			supplyName: req.query.supplyName !== "" ? req.query.supplyName : undefined
		});
	});
};

//GET /supplies/:storeLocation
exports.store = function(req, res, next){
	storeLocation = req.params.storeLocation;
	Supply.find({location: storeLocation}, function(err, supplies){
		res.render('supplies/store', {
			storeName: storeLocation,
			pageTitle: storeLocation.charAt(0).toUpperCase() + storeLocation.slice(1) + " Supplies",
			pageSubtitle: "Current Supplies",
			supplies: supplies
		});
	});
}

//GET /supplies/:supplyName/buy
exports.buy = function(req, res, next){
	/*
	Supply.find({name: req.params.supplyName}, function(err, supplies){
		
		amazonClient.itemLookup({
			itemId: supplies[0].amazonID,
			responseGroup: 'ItemAttributes,Offers,Images',
			domain: 'webservices.amazon.de',
			}, function(err, results, response) {
				if (err) {
					res.redirect('/supplies');
				} else {
					res.render('supplies/buy', {
						pageTitle: "Confirm Purchase of " + req.params.supplyName,
						pageSubtitle: results[0]['ItemAttributes'][0]['Title'][0],
						amazonObject: results[0]
					});
				}
			}
		);
	});
	*/
	amazonClient.itemSearch({
	 	searchIndex: 'Grocery',
	 	keywords: req.params.supplyName,
	 	domain: 'webservices.amazon.de',
	 	responseGroup: 'ItemAttributes,Images'
	}, function(err, results, response) {
		if (err) {
			console.log(results);
			var errorMessage = escape('There is currently a problem with Amazon API. Please try later.');
			res.redirect('/supplies?error=' + errorMessage);
		} else {
			if (results.length === 0){
				var errorMessage = escape('Unable to find product in Amazon');
				res.redirect('/supplies?error=' + errorMessage);
			}
			if (results.length > 6)
				results = results.slice(0,6);

			Purchase.remove({name: req.params.supplyName}, function(err, result){
				res.render('supplies/buy', {
					pageTitle: "Confirm Purchase of " + req.params.supplyName,
					amazonObjects: results,
					awsId: awsId,
					awsTag: awsTag
				});
			});
		}
	});
};

//GET /supplies/:supplyName/check
exports.check = function(req, res, next){
	request({
			url: 'http:\/\/localhost:1880/checkSupplies',
			json: true
		}, function (error, response, body) {
			Supply.find({name: req.params.supplyName}, function(err, supplies){
				if (supplies[0].fsr){
					var value = body['FSR'+supplies[0].fsr.toString()]/1024;
					var desired = supplies[0].desired;
					supplies[0].value = Math.round(desired*value);
					supplies[0].save(function(err){
						if (err) console.log(err);
					});
					res.redirect('/supplies?suppliesMessage=' + escape("There are currently " + Math.round(desired*value) + " " + supplies[0].units) +
						"&supplyName=" + req.params.supplyName);
				}
				else {
					res.redirect('/supplies?suppliesMessage=' + escape("FSR not connected") +
					"&supplyName=" + req.params.supplyName);
				}
			});		
		});

};