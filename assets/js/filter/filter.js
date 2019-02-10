"use strict";

// Apply filterType on canvas according to option1, option2 and option3
function applyFilter(filterType, option1, option2, option3) {
	let imgData = getImageData(0, 0, canvas.width, canvas.height); 

	filterImageData(imgData, filterType, option1, option2, option3);
	putImageData(imgData, 0, 0);
}

// Apply filterType on imgData according to option1, option2 and option3
function filterImageData(imgData, filterType, option1, option2, option3) {
	switch(filterType) {
		case FilterType.NEGATIVE:
			return mapImageData(imgData, pixelNegativeFilter);

		case FilterType.BLACK_AND_WHITE1:
			return mapImageData(imgData, (pixel) => pixelBlackAndWhite1Filter(pixel, option1, option2, option3));

		case FilterType.BLACK_AND_WHITE2:
          	return mapImageData(imgData, (pixel) => pixelBlackAndWhite2Filter(pixel, option1, option2, option3));

		case FilterType.BLACK_AND_WHITE3:
			return mapImageData(imgData, (pixel) => pixelBlackAndWhite3Filter(pixel, option1, option2, option3));

		case FilterType.BLACK_AND_WHITE4:
			return mapImageData(imgData, (pixel) => pixelBlackAndWhite4Filter(pixel, option1, option2, option3));
			      
		case FilterType.BLACK_AND_WHITE_CEIL:
			return mapImageData(imgData, (pixel) => pixelBlackAndWhiteCeilFilter(pixel, option1));

		case FilterType.COLOR_CEIL:
			return mapImageData(imgData, (pixel) => pixelColorCeilFilter(pixel, option1));

		case FilterType.SEPIA:
			return mapImageData(imgData, pixelColorSepiaFilter);

		case FilterType.MONOCHROME:
			return mapImageData(imgData, (pixel) => pixelMonochromeFilter(pixel, option1));

		case FilterType.PIXELATED:
			return pixelateImageDataFilter(imgData, option1);
	
		case FilterType.SAFE_COLORS:
			return mapImageData(imgData, pixelSafeColorsFilter);

		case FilterType.PERMUTATE_COLORS:
			if( option1 !== ColorComponent.RED && option1 !== ColorComponent.GREEN && 
	    		    option1 !== ColorComponent.BLUE && option1 !== ColorComponent.NONE )
	    			return error("toRed is not a ColorComponent", imgData);

			if( option2 !== ColorComponent.RED && option2 !== ColorComponent.GREEN && 
	    		    option2 !== ColorComponent.BLUE && option2 !== ColorComponent.NONE )
	    			return error("toGreen is not a ColorComponent", imgData);

			if( option3 !== ColorComponent.RED && option3 !== ColorComponent.GREEN && 
	    		    option3 !== ColorComponent.BLUE && option3 !== ColorComponent.NONE )
	    			return error("toBlue is not a ColorComponent", imgData);

			return mapImageData(imgData, (pixel) => pixelColorComponentFilter(pixel, option1, option2, option3));

		default:
			return error("The filterType is undefined", imgData);
	}
}

// Apply negative filter
function pixelNegativeFilter(pixel) {
	pixel.r = 255 - pixel.r;
	pixel.g = 255 - pixel.g;
	pixel.b = 255 - pixel.b;

	return pixel;
}

// Apply blackAndWhite1 filter
function pixelBlackAndWhite1Filter(pixel, applyOnRed=true, applyOnGreen=true, applyOnBlue=true) {
	 return pixelEqualValueFilter( pixel, 
								   0.299*pixel.r + 0.587*pixel.g + 0.114*pixel.b, 
								   applyOnRed, 
								   applyOnGreen, 
								   applyOnBlue );
}

// Apply blackAndWhite2 filter
function pixelBlackAndWhite2Filter(pixel, applyOnRed=true, applyOnGreen=true, applyOnBlue=true) {
 	return pixelEqualValueFilter( pixel, 
								  0.2126*pixel.r + 0.7152*pixel.g + 0.0722*pixel.b, 
								  applyOnRed, 
								  applyOnGreen, 
								  applyOnBlue );
}

// Apply blackAndWhite3 filter
function pixelBlackAndWhite3Filter(pixel, applyOnRed=true, applyOnGreen=true, applyOnBlue=true) {
	return pixelEqualValueFilter( pixel, 
								  (pixel.r + pixel.g + pixel.b)/3,
								  applyOnRed, 
								  applyOnGreen, 
								  applyOnBlue );
}

// Apply blackAndWhite4 filter
function pixelBlackAndWhite4Filter(pixel, applyOnRed=true, applyOnGreen=true, applyOnBlue=true) {
	return pixelEqualValueFilter( pixel, 
								  ( Math.max(pixel.r, pixel.g, pixel.b) - Math.min(pixel.r, pixel.g, pixel.b) )/2,
								  applyOnRed, 
								  applyOnGreen, 
								  applyOnBlue );
}

// Apply ceil filter on pixel
function pixelColorCeilFilter(pixel, ceil=128) {
	pixel.r = (pixel.r < ceil) ? 0 : 255;
	pixel.g = (pixel.g < ceil) ? 0 : 255;
	pixel.b = (pixel.b < ceil) ? 0 : 255;

	return pixel;
}

// Apply value on pixel according to applyOnRed, applyOnGreen and applyOnBlue
function pixelEqualValueFilter(pixel, value, applyOnRed=true, applyOnGreen=true, applyOnBlue=true) {
	if(applyOnRed)
		pixel.r = value;

	if(applyOnGreen)
		pixel.g = value;

	if(applyOnBlue)
		pixel.b = value;
	
	return pixel;
}

// Apply monochrome filter on pixel with sepia color
function pixelColorSepiaFilter(pixel) {
	return pixelMonochromeFilter(pixel, new Color(94, 38, 18));
}

// Apply monochrome filter on pixel according to color
function pixelMonochromeFilter(pixel, color) {
	let gray = pixelBlackAndWhite1Filter(pixel).r;

	if(gray < 128) {
		pixel.r = color.r*gray/128;
		pixel.g = color.g*gray/128;
		pixel.b = color.b*gray/128;
	} else {
		pixel.r = color.r + (255 - color.r)*(gray - 128)/128;
		pixel.g = color.g + (255 - color.g)*(gray - 128)/128;
		pixel.b = color.b + (255 - color.b)*(gray - 128)/128;
	}

	return pixel;
}

// Apply pixelate filter on imgData according to scale O(width*height)
function pixelateImageDataFilter(imgData, scale=10) {
	if(scale <= 0)
	        return error("The scale is too short, it have to be bigger than 0.", imgData)
    
    for(let x = 0; x < imgData.width - imgData.width%scale; x += scale) {
		for(let y = 0; y < imgData.height - imgData.height%scale; y += scale) {
			smoothImageDataRect(imgData, x, y, scale, scale);
		}
	}

	if(imgData.width%scale !== 0) {
		for(let y = 0; y < (imgData.height - imgData.height%scale); y += scale) {
			smoothImageDataRect( imgData, 
                                 (imgData.width - imgData.width%scale), 
                                 y,
                                 imgData.width%scale,
                                 scale );
		}
	}

	if(imgData.height%scale !== 0) {
		for(let x = 0; x < (imgData.width - imgData.width%scale); x += scale) {
			smoothImageDataRect( imgData, 
                                 x, 
                                 (imgData.height - imgData.height%scale), 
                                 scale, 
                                 imgData.height%scale );
		}
	}

	if(imgData.width%scale !== 0 && imgData.height%scale !== 0) {
		smoothImageDataRect( imgData, 
							 (imgData.width - imgData.width%scale), 
							 (imgData.height - imgData.height%scale), 
							 imgData.width%scale,
							 imgData.height%scale );
    }
	return imgData;
}

// Apply safeColors filter on pixel
function pixelSafeColorsFilter(pixel) {
	pixel.r = Math.round(pixel.r/51)*51
	pixel.g = Math.round(pixel.g/51)*51
	pixel.b = Math.round(pixel.b/51)*51

	return pixel;
}

// Apply permutateColors filter on pixel according to toRed, toGreen and toRed
function pixelColorComponentFilter(pixel, toRed=ColorComponent.RED, toGreen=ColorComponent.GREEN, toBlue=ColorComponent.BLUE) {
	return new Color( getPixelComponent(pixel, toRed),
			  		  getPixelComponent(pixel, toGreen),
			  		  getPixelComponent(pixel, toBlue) );
}

// Fill the area with the average color
function smoothImageDataRect(imgData, posX, posY, width, height) {
	if( ( posX < 0 || posX + width > imgData.width ) ||
	    ( posY < 0 || posY + height > imgData.height ) )
		return error("The position and the dimensions precised don't match with imgData's dimensions.", imgData);

	let pixelSum = new Color(0);
	let averagePixel;

	foreachImageDataRect( posX, posY, width, height, imgData, (pixel) => { pixelSum.add(pixel) } );

	averagePixel = Color.divide(pixelSum, height*width);
	
	mapImageDataRect(posX, posY, width, height, imgData, () => averagePixel)

	return imgData
}
