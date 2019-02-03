"use strict";

let canvas;

let img;

window.onload = init;

function init() {
	initInterface();
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));

	img = new Image();

	img.src = "assets/img/balloon.jpg";
	img.onload = initDraw;
}

function initDraw() {
	initImg();

	canvas.width = img.width;
	canvas.height = img.height

	drawImage(img, 0, 0, img.width, img.height);
}

function initImg() {
	let ratio = img.height/img.width;

	if(img.height < img.width) {
		img.width = 700;
		img.height = Math.floor(ratio*img.width);
	} else {
		img.height = 433;
		img.width = Math.floor(ratio*img.height)
	}
}
