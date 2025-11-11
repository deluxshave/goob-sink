// remove the cooked egg from Naturalist, since it conflicts with (and serves
// the same purpose) as the fried egg from Farmer's Delight.

REIEvents.hide("item", event => {
	event.hide("naturalist:cooked_egg");
});
