// various recipe fixes.

const EMPTY_BUCKETS = [
	"aether:skyroot_bucket"
];
const WATER_BUCKETS = [
	"aether:skyroot_water_bucket"
];
const MILK_BUCKETS = [
	"aether:skyroot_milk_bucket"
];
const ENTITY_WATER_BUCKETS = [
	"aether:skyroot_cod_bucket",
	"aether:skyroot_salmon_bucket",
	"aether:skyroot_pufferfish_bucket",
	"aether:skyroot_tropical_fish_bucket",
	"aether:skyroot_axolotl_bucket",
	"aether:skyroot_tadpole_bucket",
	"betterend:bucket_end_fish",
	"betterend:bucket_cubozoa",
	"crittersandcompanions:dumbo_octopus_bucket",
	"crittersandcompanions:koi_fish_bucket",
	"crittersandcompanions:sea_bunny_bucket",
	"naturalist:catfish_bucket",
	"naturalist:bass_bucket",
	"naturalist:snail_bucket"
];
const EDIBLE_EGGS = [
	"minecraft:egg",
	"#aether:moa_eggs",
	"naturalist:duck_egg"
];

ServerEvents.tags("item", event => {
	// register modded buckets under conventional tags
	for (const item of EMPTY_BUCKETS) {
		event.add("c:empty_buckets", item);
	}
	for (const item of WATER_BUCKETS) {
		event.add("c:water_buckets", item);
	}
	for (const item of MILK_BUCKETS) {
		event.add("c:milk_buckets", item);
	}
	for (const item of ENTITY_WATER_BUCKETS) {
		event.add("c:entity_water_buckets", item);
	}

	// register edible eggs tag
	for (const item of EDIBLE_EGGS) {
		event.add("goob_sink:edible_eggs", item);
	}
});

ServerEvents.recipes(event => {
	// replace vanilla buckets in most recipes with conventional tags
	event.replaceInput(
		{
			input: "minecraft:bucket",
			not: [
				{mod: "create"},
				{id: "supplementaries:lumisene_bucket"},
				{id: "farmersdelight:milk_bucket_from_bottles"}
			]
		},
		"minecraft:bucket",
		"#c:empty_buckets"
	);
	event.replaceInput(
		{
			input: "minecraft:water_bucket",
			not: {
				mod: "create",
				not: {type: "minecraft:crafting"}
			}
		},
		"minecraft:water_bucket",
		"#c:water_buckets"
	);
	event.replaceInput(
		{
			input: "minecraft:milk_bucket",
			not: [
				{
					mod: "create",
					not: {type: "minecraft:crafting"}
				},
				{id: "farmersdelight:milk_bottle"}
			]
		},
		"minecraft:milk_bucket",
		"#c:milks"
	);

	// replace eggs in recipes to use our edible eggs tag
	event.replaceInput(
		{input: "minecraft:egg"},
		"minecraft:egg",
		"#goob_sink:edible_eggs"
	);
	event.replaceInput(
		{input: "#balm:eggs"},
		"#balm:eggs",
		"#goob_sink:edible_eggs"
	);

	// add skyroot bucket versions of milk bottle/bucket conversions
	event.shapeless(
		Item.of("aether:skyroot_milk_bucket", 1),
		[
			"aether:skyroot_bucket",
			"4x farmersdelight:milk_bottle"
		]
	);
	event.replaceInput(
		{id: "farmersdelight:milk_bottle"},
		"minecraft:milk_bucket",
		"#c:milk_buckets"
	);

	// remove redundant cake recipes
	event.remove([
		{id: "minecraft:cake"},
		{id: "naturalist:cake"},
		{mod: "aether", output: "minecraft:cake"}
	]);

	// remove redundant pumpkin pie recipes
	event.remove([
		{id: "naturalist:pumpkin_pie"},
		{id: "aether:moa_egg_pumpkin_pie"}
	]);
});
