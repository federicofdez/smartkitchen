var mongoose = require('mongoose');

var Supply = require('./supplies');
var Appliance = require('./appliances');

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
		name: "Rice",
		units: "kg",
		desired: 2,
		value: 1.5,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Spaguetti",
		units: "kg",
		desired: 3,
		value: 0.75,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Milk",
		units: "L",
		desired: 5,
		value: 4,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Flour",
		units: "kg",
		desired: 2,
		value: 0.5,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Yoghurt",
		units: "units",
		desired: 8,
		value: 1,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Bananas",
		units: "units",
		desired: 8,
		value: 3,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Tomatoes",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Ice Cream",
		units: "L",
		desired: 1,
		value: 0.4,
		autoPurchase: false,
		location: "freezer"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Salmon",
		units: "g",
		desired: 800,
		value: 400,
		autoPurchase: false,
		location: "freezer"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Schnitzel",
		units: "units",
		desired: 5,
		value: 2,
		autoPurchase: false,
		location: "freezer"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Onions",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Sugar",
		units: "kg",
		desired: 2,
		value: 1.2,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Cookies",
		units: "packets",
		desired: 3,
		value: 0.2,
		autoPurchase: true,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Oil",
		units: "L",
		desired: 4,
		value: 3.75,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Salt",
		units: "kg",
		desired: 2,
		value: 1,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Pepper",
		units: "g",
		desired: 100,
		value: 30,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Vinegar",
		units: "L",
		desired: 1,
		value: 0.8,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Ham",
		units: "Slices",
		desired: 12,
		value: 1,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Cheese",
		units: "Slices",
		desired: 12,
		value: 3,
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

var appliances = [];
appliances.push(
	new Appliance({
		id: new mongoose.Types.ObjectId(),
		name: "ExhaustFan",
		actions: [
			{
				name: "Turn On",
				endpoint: "/exhaustfan"
			},
			{
				name: "Turn Off",
				endpoint: "/exhaustfan"
			}
		],
		isON: false
	}),
	new Appliance({
		id: new mongoose.Types.ObjectId(),
		name: "Oven",
		actions: [
			{
				name: "Turn On",
				endpoint: "/oven"
			},
			{
				name: "Turn Off",
				endpoint: "/oven"
			},
			{
				name: "Read Temperature",
				endpoint: "/readTemp"
			}
		],
		isON: false
	}),
	new Appliance({
		id: new mongoose.Types.ObjectId(),
		name: "Stove",
		actions: [
			{
				name: "Turn On",
				endpoint: "/stove"
			},
			{
				name: "Turn Off",
				endpoint: "/stove"
			},
			{
				name: "Read Temperature",
				endpoint: "/readTemp"
			}
		],
		isON: false
	}),
	new Appliance({
		id: new mongoose.Types.ObjectId(),
		name: "Scales",
		actions: [
			{
				name: "Check",
				endpoint: "/checkSupplies"
			}
		],
		isON: false
	})
);

for (var i=0; i<appliances.length; i++){
	appliances[i].save(function (err) {
		if (err) return handleError(err);
		else console.log("Saved!");
	});
};