"use strict";

let tabs = [];
let filterElements = [];
let settingsPanels = [];

function initInterface() {
	initFilterElements();
	initSettingsPanels();
}

function getColorFromInput(inputColorElement) {
	let hexa = inputColorElement.value.replace('#', '');

	return new Color(parseInt(hexa.substr(0, 2), 16),
       			 parseInt(hexa.substr(2, 2), 16),
			 parseInt(hexa.substr(4, 2), 16));
}
