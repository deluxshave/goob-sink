// remove the wheat dough from Farmer's Delight.
// you should use Create dough instead.

REIEvents.hide("item", event => {
	event.hide("farmersdelight:wheat_dough");
});
