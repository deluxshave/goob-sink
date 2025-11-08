// remove the wheat dough from Farmer's Delight in favour.
// you should use Create dough instead.

REIEvents.hide("item", event => {
	event.hide("farmersdelight:wheat_dough");
});
