// replace the rose quartz from Biomes o' Plenty with the one from Create.

LootJS.modifiers(event => {
	event.addBlockLootModifier("biomesoplenty:rose_quartz_cluster")
		.replaceLoot("biomesoplenty:rose_quartz_chunk", "create:rose_quartz");
});

ServerEvents.recipes(event => {
	event.remove([
		{input: "biomesoplenty:rose_quartz_chunk"},
		{output: "biomesoplenty:rose_quartz_chunk"}
	]);
});

// remove the ability to use BOP rose quartz as a trim material
ServerEvents.tags("item", event => {
	event.remove("minecraft:trim_materials", "biomesoplenty:rose_quartz_chunk");
});
