var canvas;
var ctx;
function prepCanv(){
	canvas = document.getElementById("canv");
	$("#canv").attr("width",$(window).width()*.8);
	$("#canv").attr("height",$(window).height()*.8);
	ctx = canvas.getContext("2d");
	ctx.transform(1, 0, 0, -1, 0, canvas.height);
	ctx.fillStyle = "White";
	ctx.fillRect(0,0,$("#canv").attr("width"),$("#canv").attr("height"));
}