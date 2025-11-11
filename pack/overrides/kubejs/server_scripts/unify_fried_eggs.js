// remove the cooked egg from Naturalist, since it conflicts with (and serves
// the same purpose) as the fried egg from Farmer's Delight.

ServerEvents.tags("item", event => {
	// technically this is unnecessary, since these tags are never
	// referenced by any other mod, but it's better to be safe
	event.remove("c:cooked_eggs", "naturalist:cooked_egg");
	event.remove("forge:cooked_eggs", "naturalist:cooked_egg");
});

ServerEvents.recipes(event => {
	event.remove({output: "naturalist:cooked_egg"});
});
