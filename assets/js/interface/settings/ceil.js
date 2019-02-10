"use strict";

let ceilSettingsInput;

function initCeilSettings() {
    ceilSettingsInput = document.getElementById("ceilSettingsInput");
    ceilSettingsInput.addEventListener("change", () => {
	initDraw();
	applyFilter(FilterType.CEIL, ceilSettingsInput.value)
    });
}
