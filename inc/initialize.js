"use strict";

let canvas;

let imgData1;
let imgData2;

let img;

let animationTimeout;

window.onload = init;

function init() {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));

	img = new Image();

	img.src = "img/link.jpg";
	img.onload = draw;

}

function draw() {
	canvas.width = img.width;
	canvas.height = img.height
	drawImage(img, 0, 0, img.width, img.height);

	imgData1 = getImageData(0, 0, canvas.width, canvas.height); 
	imgData2 = getImageData(0, 0, canvas.width, canvas.height); 

	filterImageData(imgData2, FilterType.SEPIA);

	putImageData(imgData1, 0, 0);

	animation(0);
	setTimeout(() => animation(1), 1000);
}

function animation(i) {
	let j;

	for(j = i; j < i + 10000 && j < imgData1.data.length/4; j += 2) {
		setPixelByIndex(j, imgData1, getPixelByIndex(j, imgData2))
	}
	i = j;

	if(i < imgData1.data.length/4) {
		setTimeout(() => animation(i), 100);
	}

	putImageData(imgData1, 0, 0);
}
