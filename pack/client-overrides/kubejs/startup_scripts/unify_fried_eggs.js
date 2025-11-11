// remove the cooked egg from Naturalist, since it conflicts with (and serves
// the same purpose) as the fried egg from Farmer's Delight.

StartupEvents.modifyCreativeTab("naturalist:item_group", event => {
	event.remove("naturalist:cooked_egg");
});
