prepCanv();
function update(){
	ctx.fillStyle = "White";
	ctx.fillRect(0,0,$("#canv").attr("width"),$("#canv").attr("height"));
	ctx.save();
	for(var i=0;i<objects.length;i++){
		objects[i].tick();
		drawObject(objects[i].x,objects[i].y,objects[i].width,objects[i].height,objects[i].shape,objects[i].color);
	}
	ctx.restore();
	window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);