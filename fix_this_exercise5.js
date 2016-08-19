var person = {
	name: "Alan";
	isAwesome: true;
	sayAwesome: function() {
		if (this.awesome == true) {
			console.log(this.name + " is awesome!");
		} else {
			console.log(this.name + " is alright");
		}
	}
}

person.sayAwesome();