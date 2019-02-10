"use strict";

// enum
const FilterType = {
	NEGATIVE: "negative",
	BLACK_AND_WHITE1 : "blackAndWhite1",
	BLACK_AND_WHITE2 : "blackAndWhite2",
	BLACK_AND_WHITE3 : "blackAndWhite3",
	BLACK_AND_WHITE4 : "blackAndWhite4",
	CEIL: "ceil",
	SEPIA: "colorSepia",
	MONOCHROME: "monochrome",
	PIXELATED: "pixelated",
	SAFE_COLORS: "safeColors",
	PERMUTATE_COLORS: "permutateColors"
}

function isFilterType(value) {
	return value === FilterType.NEGATIVE ||
	       value === FilterType.BLACK_AND_WHITE1 ||
	       value === FilterType.BLACK_AND_WHITE2 ||
	       value === FilterType.BLACK_AND_WHITE3 ||
	       value === FilterType.BLACK_AND_WHITE4 ||
	       value === FilterType.CEIL ||
	       value === FilterType.SEPIA ||
	       value === FilterType.MONOCHROME ||
	       value === FilterType.PIXELATED ||
	       value === FilterType.SAFE_COLORS ||
	       value === FilterType.PERMUTATE_COLORS;
}
