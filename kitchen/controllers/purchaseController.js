var Purchase = require('../models/purchases');

// POST /triggerPurchase
exports.index = function(req, res, next){

	var purchase = new Purchase({name: 'Cookies'});
	purchase.save(function(err) {
		res.send("OK");
	});
}
