window.onload=function() {
alert('Welcome!');

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");



var imageObj = new Image();
imageObj.onload = function(){
var destX = canvas.width / 1 -( this.width + 20);
var destY = canvas.height / 2 - this.height / 2;
context.drawImage(this, destX, destY);
};
imageObj.src = "ninja-black.jpg";



var imageObj2 = new Image();
imageObj2.onload = function(){
var destX2 = canvas.width / 4 - this.width / 2;
var destY2 = canvas.height / 2 - this.height / 2;
context.drawImage(this, destX2, destY2);
};
imageObj2.src = "ninja-red.jpg";
};
