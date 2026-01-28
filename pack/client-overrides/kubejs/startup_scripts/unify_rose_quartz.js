// remove the rose quartz from Biomes o' Plenty.
// you should use the one from Create instead.

StartupEvents.modifyCreativeTab("biomesoplenty:main", event => {
	event.remove("biomesoplenty:rose_quartz_chunk");
	event.remove("biomesoplenty:rose_quartz_block");
});
