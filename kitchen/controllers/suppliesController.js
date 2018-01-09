var  Supply = require('../models/supplies');

// GET /supplies
exports.index = function(req, res, next){
	Supply.find({}, function(err, supplies){
		var fridgeSupplies = [];
		var freezerSupplies = [];
		var cupboardSupplies = [];
		for (var i=0; i<6; i++){
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
			cupboardSupplies: cupboardSupplies
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