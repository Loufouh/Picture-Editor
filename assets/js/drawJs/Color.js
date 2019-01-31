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
