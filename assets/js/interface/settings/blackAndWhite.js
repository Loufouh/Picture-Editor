"use strict";

let blackAndWhiteSelect,
    blackAndWhiteRedCheckbox,
    blackAndWhiteGreenCheckbox,
    blackAndWhiteBlueCheckbox;

function initBlackAndWhiteSettings() {
    initBlackAndWhiteSettingsElements();
    initBlackAndWhiteSettingsListeners();
}

function initBlackAndWhiteSettingsElements() {
    blackAndWhiteSelect = document.getElementById("blackAndWhiteSelect");
    blackAndWhiteRedCheckbox = document.getElementById("blackAndWhiteRedCheckbox");
    blackAndWhiteGreenCheckbox = document.getElementById("blackAndWhiteGreenCheckbox");
    blackAndWhiteBlueCheckbox = document.getElementById("blackAndWhiteBlueCheckbox");
}

function initBlackAndWhiteSettingsListeners() {
    blackAndWhiteSelect.addEventListener("change", blackAndWhiteSettingsListener);
    blackAndWhiteRedCheckbox.addEventListener("change", blackAndWhiteSettingsListener);
    blackAndWhiteGreenCheckbox.addEventListener("change", blackAndWhiteSettingsListener);
    blackAndWhiteBlueCheckbox.addEventListener("change", blackAndWhiteSettingsListener);
}

function blackAndWhiteSettingsListener() {
    initDraw();
    applyFilter( blackAndWhiteSelect.value, 
                 !blackAndWhiteRedCheckbox.checked, 
                 !blackAndWhiteGreenCheckbox.checked, 
                 !blackAndWhiteBlueCheckbox.checked );
}