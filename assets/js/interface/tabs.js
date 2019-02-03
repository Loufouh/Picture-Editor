"use strict";

function initTabs() {
	tabs = document.querySelectorAll(".tab");

	for(let i = 0; i < tabs.length; i++)
		tabs[i].addEventListener("click", selectTab);
}

function selectTab() {
	for(let i = 0; i < tabs.length; i++)
		tabs[i].classList.remove("selected");
	this.classList.add("selected");
}
