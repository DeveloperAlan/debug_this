var house : {
	door: true, 
	windows: 4,
	roof: "red",
	people: ["Alan", "Rosie", "Ben"]
	dog: 1,
	addWindow: function() {
		this.windows++;
	}
	greetPeople: function(number) {
		console.log("Welcome " + this.people[number] + " to the house!");
	}
	changeRoofColor= function(color) {
		this.roof = color;
		console.log("The colour of the roof is now " + this.roof);
	}
}

console,log(house.addwindow);