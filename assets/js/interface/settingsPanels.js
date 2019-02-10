"use strict";

function initSettingsPanels() {
	settingsPanels = document.querySelectorAll(".settingsPanel");
	initMonochromeSettings();
	initBlackAndWhiteSettings();
	initCeilSettings();
	initPixelatedSettings();
	initColorPermutationsSettings();
}

function showSettingsPanel(panel) {
	hideSettings();
	panel.classList.remove("hidden");
}

function hideSettings() {
	for(let i = 0; i < settingsPanels.length; i++)
		settingsPanels[i].classList.add("hidden");
}

