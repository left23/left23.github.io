// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
    var x		=	1;
    var y		=	12;
    var dirx	=	1;
    var diry	=	1;

    var imageObj = new Image();	
	imageObj.src = "bigball.png";
    canvas = document.createElement( 'canvas' );
    canvas.width = 568;
    canvas.height = 400;
    context = canvas.getContext( '2d' );
  	$( document ).ready(function() {  
  	alert('ready');
	
        $( "#holder" ).append( canvas );
        animate();
    });
   
    function animate() {
        requestAnimFrame( animate );
        update();
        draw();
}

    function update(){
        x = x + dirx;
        y = y + diry;

        if ( y == 360 || y== 0){
            diry = -diry;
        }
        if ( x == 480|| x == 0){
            dirx = -dirx;
        }
    }

    function draw() 
    {
	
	    context.clearRect(0,0 , canvas.width, canvas.height);
 
	    context.save();
        
        context.beginPath();
     	
        // draw hero

	    console.log(y);
	    
	    context.drawImage(imageObj, x, y );
 		
 		context.restore();

	    str2 = "x: " + x + "y :" + y;
	    context.fillText(str2, 20, 34);

	    context.fillStyle = 'white';
			
	}// end draw
