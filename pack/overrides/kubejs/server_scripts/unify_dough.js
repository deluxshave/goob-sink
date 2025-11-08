// remove the wheat dough from Farmer's Delight in favour.
// you should use Create dough instead.

ServerEvents.tags("item", event => {
	event.remove("c:dough", "farmersdelight:wheat_dough");
	event.remove("c:wheat_dough", "farmersdelight:wheat_dough");
});

ServerEvents.recipes(event => {
	event.remove([
		{input: "farmersdelight:wheat_dough"},
		{output: "farmersdelight:wheat_dough"}
	]);
});
