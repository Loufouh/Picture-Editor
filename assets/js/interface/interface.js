"use strict";

let tabs = [];
let filterElements = [];

function initInterface() {
	initTabs();
	initFilterElements();
}

function initTabs() {
	tabs = document.querySelectorAll(".tab");

	for(let i = 0; i < tabs.length; i++)
		tabs[i].addEventListener("click", selectTab);
}

function initFilterElements() {
	filterElements = document.querySelectorAll(".filterElement");

	for(let i = 0; i < filterElements.length; i++)
		filterElements[i].addEventListener("click", selectFilter);
}
