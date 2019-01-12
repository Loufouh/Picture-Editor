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

	img.src = "img/fleur.jpg";
	img.onload = draw;

}

function draw() {
	canvas.width = img.width;
	canvas.height = img.height
	drawImage(img, 0, 0, img.width, img.height);

	imgData = getImageData(0, 0, canvas.width, canvas.height); 

	filterImageData(imgData, FilterType.SEPIA);
	putImageData(imgData, 0, 0);
}
