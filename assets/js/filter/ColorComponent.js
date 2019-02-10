"use strict";

// enum
const ColorComponent = {
	NONE: "none",
	RED: "red",
	GREEN: "green",
	BLUE: "blue"
}

function getPixelComponent(pixel, colorComponent) {
	if(colorComponent === ColorComponent.RED)
		return pixel.r;
	else if(colorComponent === ColorComponent.GREEN)
		return pixel.g;
	else if(colorComponent === ColorComponent.BLUE)
		return pixel.b;
	else if(colorComponent === ColorComponent.NONE)
		return 0;
	else
		return error("colorComponent is undefined.", 0);
}
