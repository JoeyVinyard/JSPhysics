var objects = [];

var baseObject = {
	x: 0,
	y: 0,
	xVel: 0,
	yVel: 0,
	fric: .5,
	rest: .5,
	potEn: 0,
	kinEn: 0,
	shape: "Rectangle",
	getX: function(){
		return this.x;
	},
	getY: function(){
		return this.y;
	}
}