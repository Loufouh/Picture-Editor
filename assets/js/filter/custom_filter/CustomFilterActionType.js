"use strict";

// enum
const CustomFilterActionType = {
	FILTER: "filter",
	HUE: "hue",
	SATURATION: "saturation",
	LIGHTNESS: "lightness",
	RED: "red",
	GREEN: "green",
	BLUE: "blue",
};

function isCustomFilterActionType(value) {
	return value === CustomFilterActionType.HUE ||	
	       value === CustomFilterActionType.SATURATION ||	
	       value === CustomFilterActionType.LIGHTNESS ||	
	       value === CustomFilterActionType.RED ||	
	       value === CustomFilterActionType.GREEN ||	
	       value === CustomFilterActionType.BLUE;
}
