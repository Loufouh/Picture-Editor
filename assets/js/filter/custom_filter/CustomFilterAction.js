"use strict";

class CustomFilterAction {
	constructor(type, value) {
		if(type === undefined)
			return error("type is undefined", new CustomFilterAction(FilterType.MONOCHROME, new Color(0)));
		if(!isFilterType(type) && !isCustomFilterActionType(type))
			return error("type is not a FilterType or a CustomFilterActionType.", new CustomFilterAction(FilterType.MONOCHROME, new Color(0)));

		this.type = type;
		this.value = value;
	}

	apply(imgData) {
		if(isFilterType(this.type))
			return filterImageData(imgData, this.type, this.value[0], this.value[1], this.value[2]);
			
		if(this.type === CustomFilterActionType.RED)
			return mapImageData(imgData, (pixel) => new Color(this.value, pixel.g, pixel.b));
		else if(this.type === CustomFilterActionType.GREEN)
			return mapImageData(imgData, (pixel) => new Color(pixel.r, this.value, pixel.b));
		else if(this.type === CustomFilterActionType.BLUE)
			return mapImageData(imgData, (pixel) => new Color(pixel.r, pixel.g, this.value));
	}
}

