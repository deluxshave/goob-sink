// remove chairs, stools, and bar stools from BetterNether and BetterEnd.

// unfortunately, there are no tags like #betternether:chairs or anything,
// so we have to get creative...

const AUTO_PREFIXES = {
	"betternether": [
		// BetterNether adds chairs for vanilla wood types too
		"acacia",
		"bamboo",
		"birch",
		"cherry",
		"crimson",
		"dark_oak",
		"jungle",
		"mangrove",
		"oak",
		"spruce",
		"warped",

		"anchor_tree",
		"mushroom_fir",
		"nether_mushroom",
		"nether_reed",
		"nether_sakura",
		"rubeus",
		"stalagnate",
		"wart",
		"willow"
	],
	"betterend": [
		"dragon_tree",
		"end_lotus",
		"helix_tree",
		"jellyshroom",
		"lacugrove",
		"lucernia",
		"mossy_glowshroom",
		"pythadendron",
		"tenanea",
		"umbrella_tree"
	]
};

var items = [
	"betternether:chair_cincinnasite",
	"betternether:taburet_cincinnasite",
	"betternether:bar_stool_cincinnasite"
];

for (const mod in AUTO_PREFIXES) {
	for (const type of AUTO_PREFIXES[mod]) {
		items = items.concat([
			`${mod}:${type}_chair`,
			`${mod}:${type}_taburet`,
			`${mod}:${type}_bar_stool`
		]);
	}
}

StartupEvents.modifyCreativeTab("betternether:blocks_tab", event => {
	for (const item of items) {
		if (item.startsWith("betternether:")) event.remove(item);
	}
});
StartupEvents.modifyCreativeTab("betterend:blocks_tab", event => {
	for (const item of items) {
		if (item.startsWith("betterend:")) event.remove(item);
	}
});
