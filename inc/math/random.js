"use strict";

function randomInt(min, max) {
	return Math.floor(random(min, max));
}

function random(min, max) {
	return Math.random() * (max - min) + min; 
}

function randomChar() {
	return String.fromCharCode(randomInt(100, 500));
}
