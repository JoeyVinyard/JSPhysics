var g = -.8;
var objects = [];

var baseObject = {
	mass: 10,
	x: 0,
	y: 0,
	xVel: 0,
	yVel: 0,
	width: 20,
	height: 20,
	fric: .5,
	rest: .5,
	potEn: 0,
	kinEn: 0,
	collided: false,
	shape: "Rectangle",
	getX: function(){
		return this.x;
	},
	getY: function(){
		return this.y;
	},
	tick: function(){
		if(this.collided&&this.xVel>0){
			this.xVel+=g*fric;
			if(this.xVel<0)
				this.xVel = 0;
		}
		if(!this.collided){
			this.yVel+=g;
		}
		this.x += this.xVel;
		this.y += this.yVel;
	}
}

var rect = Object.create(baseObject);
rect.x = 30;
rect.y = 800;

objects.push(rect);