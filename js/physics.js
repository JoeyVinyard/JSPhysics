var g = -.7;
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
	fixed: false,
	shape: "rect",
	color: "Blue",
	getX: function(){
		return this.x;
	},
	getY: function(){
		return this.y;
	},
	tick: function(){
		if(this.fixed)
			return;
		if(this.y < 20){
			this.y = 20;
			this.yVel = -1*this.rest*this.yVel;
		}
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

var circ = Object.create(baseObject);
circ.shape = "circ";
circ.x = 30;
circ.y = 800;
objects.push(circ);

var rect = Object.create(baseObject);
rect.shape = "rect";
rect.color = "Red";
rect.x = 80;
rect.y = 800;
objects.push(rect);

var ground = Object.create(baseObject);
ground.shape = "rect";
ground.color = "Brown";
ground.width = 10000;
ground.height = 20;
ground.fixed = true;
objects.push(ground)