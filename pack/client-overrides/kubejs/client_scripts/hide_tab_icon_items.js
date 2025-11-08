// hide creative tab icon items from REI.

const ITEMS = [
	"biomesoplenty:bop_icon",
	"everycomp:all_woods"
];

REIEvents.hide("item", event => {
	for (const item of ITEMS) {
		event.hide(item);
	}
});
