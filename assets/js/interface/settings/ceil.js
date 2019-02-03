"use strict";

let ceilSettingsInput;

function initCeilSettings() {
    ceilSettingsInput = document.getElementById("ceilSettingsInput");
    ceilSettingsInput.addEventListener("change", () => {
        initDraw();
        applyFilter(FilterType.COLOR_CEIL, ceilSettingsInput.value)
    });
}