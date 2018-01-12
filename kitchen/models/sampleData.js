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
		germanName: "Aepfel",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Rice",
		germanName: "Reis",
		units: "kg",
		desired: 2,
		value: 1.5,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Spaguetti",
		germanName: "Spaghetti",
		units: "kg",
		desired: 3,
		value: 0.75,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Milk",
		germanName: "Milch",
		units: "L",
		desired: 5,
		value: 4,
		autoPurchase: false,
		location: "fridge",
		fsr: 1
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Flour",
		germanName: "Mehl",
		units: "kg",
		desired: 2,
		value: 0.5,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Yoghurt",
		germanName: "Joghurt",
		units: "units",
		desired: 8,
		value: 1,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Bananas",
		germanName: "Bananen",
		units: "units",
		desired: 8,
		value: 3,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Tomatoes",
		germanName: "Tomaten",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "IceCream",
		germanName: "Eis",
		units: "L",
		desired: 1,
		value: 0.4,
		autoPurchase: false,
		location: "freezer"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Salmon",
		germanName: "Lachs",
		units: "g",
		desired: 800,
		value: 400,
		autoPurchase: false,
		location: "freezer"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Schnitzel",
		germanName: "Schnitzel",
		units: "units",
		desired: 5,
		value: 2,
		autoPurchase: false,
		location: "freezer"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Onions",
		germanName: "Zwiebeln",
		units: "units",
		desired: 10,
		value: 8,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Sugar",
		germanName: "Zucker",
		units: "kg",
		desired: 2,
		value: 1.2,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Cookies",
		germanName: "Cookies",
		units: "packets",
		desired: 3,
		value: 0.2,
		autoPurchase: true,
		location: "cupboard",
		fsr: 2
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Oil",
		germanName: "Oel",
		units: "L",
		desired: 4,
		value: 3.75,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Salt",
		germanName: "Salz",
		units: "kg",
		desired: 2,
		value: 1,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Pepper",
		germanName: "Pfeffer",
		units: "g",
		desired: 100,
		value: 30,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Vinegar",
		germanName: "Essig",
		units: "L",
		desired: 1,
		value: 0.8,
		autoPurchase: false,
		location: "cupboard"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Ham",
		germanName: "Kochschinken",
		units: "Slices",
		desired: 12,
		value: 1,
		autoPurchase: false,
		location: "fridge"
	}),
	new Supply({
		id: new mongoose.Types.ObjectId(),
		name: "Cheese",
		germanName: "Kaese",
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
		name: "Socket",
		actions: [
			{
				name: "Turn On",
				endpoint: "/socket"
			},
			{
				name: "Turn Off",
				endpoint: "/socket"
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
				endpoint: "/readtemp"
			}
		],
		isON: true
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
				endpoint: "/readtemp"
			}
		],
		isON: false
	}),
	new Appliance({
		id: new mongoose.Types.ObjectId(),
		name: "Thermometer",
		actions: [
			{
				name: "Read Temperature",
				endpoint: "/readtemp"
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