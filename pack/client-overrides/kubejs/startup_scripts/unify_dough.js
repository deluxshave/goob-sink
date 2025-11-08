// remove the wheat dough from Farmer's Delight in favour.
// you should use Create dough instead.

StartupEvents.modifyCreativeTab("farmersdelight:farmersdelight", event => {
	event.remove("farmersdelight:wheat_dough");
});
