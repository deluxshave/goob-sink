// remove the rose quartz from Biomes o' Plenty.
// you should use the one from Create instead.

REIEvents.hide("item", event => {
	event.hide("biomesoplenty:rose_quartz_chunk");
	event.hide("biomesoplenty:rose_quartz_block");
});
