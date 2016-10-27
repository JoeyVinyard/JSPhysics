prepCanv();
function update(){
	ctx.fillStyle = "White";
	ctx.fillRect(0,0,$("#canv").attr("width"),$("#canv").attr("height"));
	ctx.save();
	ctx.fillStyle = "Red";
	for(var i=0;i<objects.length;i++){
		objects[i].tick();
		ctx.fillRect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
	}
	//for(var j=0;j<1000;j++){console.log("Dicks");}
	//ctx.fillRect(0,0,$("#canv").attr("width"),$("#canv").attr("height"));
	//ctx.clearRect(0,0,$("#canv").attr("width"),$("#canv").attr("height"));
	ctx.restore();
	window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);