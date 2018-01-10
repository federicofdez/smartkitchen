var Appliance = require('../models/appliances');
var request = require('request');

// GET /appliances
exports.index = function(req, res, next){
	Appliance.find({}, function(err, appliances){
		res.render('appliances/index', {
			pageTitle: "Manage the Kitchen Appliances",
			pageSubtitle: "Appliances",
			appliances: appliances,
			actionName: req.query.actionName !== "" ? req.query.actionName : undefined,
			actionResult: req.query.actionResult !== "" ? req.query.actionResult : undefined,
			appliance: req.query.appliance !== "" ? req.query.appliance : undefined
		});
	});

};

// GET /appliances/:applianceName
exports.act = function(req, res, next){
	Appliance.find({name: req.params.applianceName}, function(err, appliances){
		var action = req.query.action;
		var actions = appliances[0].actions;
		var endpoint = "";
		for (var i=0; i<actions.length; i++){
			if (actions[i].name === action)
				endpoint = actions[i].endpoint;
		}

		var method, body, json;
		if (action.includes("Turn")) {
			method = "POST";
			body = {
				state: action.includes("On") ? 1 : 0
			};
			json = true;
		} else {
			method = "GET";
			json = false;
		}
		
		request({
			url: 'localhost:1880' + endpoint,
			method: method,
			json: json,
			body: body
		}, function (error, response, body) {
			res.redirect('/appliances?actionResult=' + escape(body) +
				"&actionName=" + action + 
				"&appliance=" + req.params.applianceName);
		});
	});
}