"use strict";

let canvas;

let imgData;

let img;

let animationTimeout;

window.onload = init;

function init() {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));

	img = new Image();

	img.src = "assets/img/link.jpg";
	img.onload = draw;
}

function draw() {
	console.log(img.width, img.height)
	initImg();

	canvas.width = img.width;
	canvas.height = img.height
	drawImage(img, 0, 0, img.width, img.height);

	imgData = getImageData(0, 0, canvas.width, canvas.height); 

	filterImageData(imgData, FilterType.SEPIA);
	putImageData(imgData, 0, 0);
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
