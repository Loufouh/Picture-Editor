"use strict";

class Color {
	constructor(a, b=a, c=b, d=1, type=ColorType.RGB) {
		this.type = type;

		if(this.type === ColorType.RGB) {
			this.r = a;
			this.g = b;
			this.b = c;
			this.a = d;
		} else if(this.type === ColorType.HSL) {
			this.h = a;
			this.s = b;
			this.l = c;
			this.a = d;
		} else 
			return ("The type isn't defined !" , new Color(255));
	}

	toString() {
		if(this.type === ColorType.RGB)
			return "rgba(" + this.r + "," + this.g + "," + this.b + ", " + this.a + ")";
		else if(this.type === ColorType.HSL)
			return "hsla(" + this.h + "," + this.s + "%," + this.l + "%," + this.a + ")";
	}

	add(color) {
		this.r += color.r;
		this.g += color.g;
		this.b += color.b;

		return Color.sum(this, color);
	}
	
	getRGB() {
		if(this.type === ColorType.RGB)
			return this;

		let c = 1 - Math.abs(2*this.l)*this.s;
		let x = c*(1 - Math.abs( (this.h/60)%2 - 1) );
		let m = this.l - c/2;

		let color;

		if(this.h >= 0 && this.h < 60)
			color = new Color(c, x, 0);
		
		else if(this.h >= 60 && this.h < 120)
			color = new Color(x, c, 0);
		
		else if(this.h >= 120 && this.h < 180)
			color = new Color(0, c, x)
		
		else if(this.h >= 180 && this.h < 240)
			color = new Color(0, x, c)

		else if(this.h >= 240 && this.h < 300)
			color = new Color(x, 0, c)

		else
			color = new Color(c, 0, x)

		return new Color( (color.r + m)*255, (color.g + m)*255, (color.b + m)*255);
	}

	getHSL(){
		if(this.type === ColorType.HSL)
			return this;

		let r = this.r/255;
		let g = this.g/255; 
		let b = this.b/255;
	
		let max = Math.max(r, g, b), min = Math.min(r, g, b);
		let h, s, l = (max + min) / 2;
	
		if (max == min) {
			h = s = 0;
		} else {
			let d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	
			switch (max){
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
				
			h /= 6;
		}
			
		return new Color( ((h*100+0.5)|0), ((s*100+0.5)|0), ((l*100+0.5)|0), 1, ColorType.HSL);
	}
		
	static sum(color1, color2) {
		if(color1.type !== ColorType.RGB || color1.type !== ColorType.RGB)
			return error("One or both of the colors is not rgb", new Color());
	
		return new Color(color1.r + color2.r,
				 color1.g + color2.g,
				 color1.b + color2.b);
	}

	static divide(color, value) {
		if(color.type !== ColorType.RGB)
			return error("color is not rgb", new Color());

		return new Color(color.r/value, 
				 color.g/value,
				 color.b/value);
	}
	
	static rgb(r, g=r, b=g) {
		return Color.rgba(r, g, b);
	}

	static hsl(h, s=100, l=100) {
		return Color.hsla(h, s, l, 1);
	}

	static rgba(r, g=r, b=g, a=1) {
		return new Color(r, g, b, a);
	}

	static hsla(h, s=100, l=100, a=1) {
		return new Color(h, s, l, a, ColorType.HSL);
	}
}


