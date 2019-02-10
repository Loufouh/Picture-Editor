"use strict";

let toRedSelect,
    toGreenSelect,
    toBlueSelect;

function initColorPermutationsSettings() {
	initColorPermutationsElements();
	initColorPermutationsListeners();
}

function initColorPermutationsElements() {
	toRedSelect = document.getElementById("permutateColorsRedSelect");
	toGreenSelect = document.getElementById("permutateColorsGreenSelect");
	toBlueSelect = document.getElementById("permutateColorsBlueSelect");
}

function initColorPermutationsListeners() {
	toRedSelect.addEventListener("change", applyColorPermutationsPreview);
	toGreenSelect.addEventListener("change", applyColorPermutationsPreview);
	toBlueSelect.addEventListener("change", applyColorPermutationsPreview);
}

function applyColorPermutationsPreview() {
	initDraw();
	applyFilter(FilterType.PERMUTATE_COLORS, toRedSelect.value, toGreenSelect.value, toBlueSelect.value);
}
