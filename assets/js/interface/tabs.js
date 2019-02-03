"use strict";

function selectTab() {
	for(let i = 0; i < tabs.length; i++)
		tabs[i].classList.remove("selected");
	this.classList.add("selected");
}
