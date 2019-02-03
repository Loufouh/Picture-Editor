"use strict"

let monochromeSettingsSelect,
    monochromeSettingsInput;

function initMonochromeSettings() {
    initMonochromeElements();
    initMonochromeListeners();    
}

function initMonochromeElements() {
    monochromeSettingsSelect = document.getElementById("monochromeSelect");
    monochromeSettingsInput = document.getElementById("monochromeCustomColorInput");
}

function initMonochromeListeners() {
    initMonochromeSettingsSelectListener();  
    initMonochromeSettingsInputListener();
}

function initMonochromeSettingsSelectListener() {
    monochromeSettingsSelect.addEventListener("change", () => {
        initDraw();
        
        switch(monochromeSettingsSelect.value) {
            case "sepia":
                applyFilter(FilterType.SEPIA)
                break;
            
            case "red":
                applyFilter(FilterType.MONOCHROME, new Color(255, 52, 52));
                break;
                
            case "green":
                applyFilter(FilterType.MONOCHROME, new Color(52, 255, 52));
                break
                
            case "blue":
                applyFilter(FilterType.MONOCHROME, new Color(52, 52, 255));
                break;
        }
    });
}

function initMonochromeSettingsInputListener() {
    monochromeSettingsInput.addEventListener("change", () => {
        initDraw();
        applyFilter(FilterType.MONOCHROME, getColorFromInput(monochromeSettingsInput));
    });
}