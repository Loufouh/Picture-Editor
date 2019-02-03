"use strict";

function initFilterElements() {
	filterElements = document.querySelectorAll(".filterElement");

	for(let i = 0; i < filterElements.length; i++)
		filterElements[i].addEventListener("click", selectFilter);
}

function selectFilter() {
	switch(this.id) {
		case "normal":
			initDraw();
			hideSettings();
			break;

		case "monochrome":
			initDraw();
			showSettingsPanel(document.getElementById("monochromeSettingsPanel"));
			applyFilter(FilterType.SEPIA);
			break;

		case "blackAndWhite":
			initDraw();
			showSettingsPanel(document.getElementById("blackAndWhiteSettingsPanel"));
			applyFilter(FilterType.BLACK_AND_WHITE1);
			break;

		case "negative":
			initDraw();
			showSettingsPanel(document.getElementById("negativeSettingsPanel"));
			applyFilter(FilterType.NEGATIVE);
			break;

		case "ceil":
			initDraw();
			showSettingsPanel(document.getElementById("ceilSettingsPanel"));
			applyFilter(FilterType.COLOR_CEIL);
			break;

		case "pixelated":
			initDraw();
			showSettingsPanel(document.getElementById("pixelatedSettingsPanel"));
			applyFilter(FilterType.PIXELATED);
			break;

		default:
			alert("Ce filtre est inconnu.");
	}
}
