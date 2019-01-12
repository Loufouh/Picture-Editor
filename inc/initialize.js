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

	img.src = "img/fleur.jpg";
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

	setTimeout(() => animation(0), 50);
}

function animation(i) {
	for(let j = 0; j < 2000 && i < imgData2.width*imgData2.height; j++) {
		setPixelByIndex(i++, imgData1, getPixelByIndex(i, imgData2))
	}

	if(i >= imgData2.width*imgData2.height) {
		imgData1 = imgData2;
	} else {
		setTimeout(() => animation(i), 50);
	}

	putImageData(imgData1, 0, 0);
}
