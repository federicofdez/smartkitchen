// GET /appliances
exports.index = function(req, res, next){
	res.render('appliances/index', {
		pageTitle: "Manage the Kitchen Appliances",
		pageSubtitle: "Appliances"
	});

};