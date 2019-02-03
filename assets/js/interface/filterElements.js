"use strict";

function selectFilter() {
	switch(this.id) {
		case "normal":
			initDraw();
			break;

		case "sepia":
			initDraw();
			applyFilter(FilterType.SEPIA);
			break;

		case "blackAndWhite":
			initDraw();
			applyFilter(FilterType.BLACK_AND_WHITE1);
			break;

		case "negative":
			initDraw();
			applyFilter(FilterType.NEGATIVE);
			break;

		case "ceil":
			initDraw();
			applyFilter(FilterType.COLOR_CEIL);
			break;

		case "pixelated":
			initDraw();
			applyFilter(FilterType.PIXELATED);
			break;

		default:
			alert("Erreur dans l'application du filtre.\nContactez le développeur si cela persiste.");
	}
}
