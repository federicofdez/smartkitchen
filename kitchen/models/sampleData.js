var mongoose = require('mongoose');

var Supply = require('./supplies');

mongoose.connect('mongodb://localhost/kitchen')
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

var supplies = [];
supplies.push(
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Apples",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	})
);

for (var i=0; i<supplies.length; i++){
	supplies[i].save(function (err) {
		if (err) return handleError(err);
		else console.log("Saved!");
	});
};