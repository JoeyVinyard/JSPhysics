prepCanv();
var i = 0;
ctx.fillStyle = "Red";
function update(){
	window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);