"use strict";

let pixelatedInput,
    pixelatedButton;

function initPixelatedSettings() {
    pixelatedInput = document.getElementById("pixelatedScaleInput");
    pixelatedButton = document.getElementById("pixelatedSettingsApplyButton");
    
    pixelatedButton.addEventListener("click", () => {
        initDraw();
        applyFilter(FilterType.PIXELATED, Number(pixelatedInput.value))
    });
}