
// @pjs preload must be used to preload the image

    /* @pjs preload="fnord.png,ninja-black.jpg,ninja-red.jpg"; */
   
//  Processing.js example sketch
     
    int fontsize = 18;
    var y = 0;
    var x = 0;
    var dirX =1;
    var dirY =1;
    var destX = int(568 / 2 );
    var destY = int(380 / 2 );
    var state ;
    var status = -1; // -1: stopped  , 0 In play	
    //var imageObj = new Image();	
    //var background_obj= new Image();
    var jump = 'rest';
    var backg_x = 0;
    var backg_y = 0;
    var yValues = [0,0,1,0,2,0];
    var sections = yValues.length;
    // define starting point and bar sizes
    var space = 0;
    var sectionWidth = int(568 / sections);
    var sectionHeight = sectionWidth * 0.75;
    var show;

    PImage b_ninja;
    b_ninja = loadImage("ninja-black.jpg");

    PImage r_ninja;
    r_ninja = loadImage("ninja-red.jpg");

    PImage a;
    a = loadImage("fnord.png");

    PImage b;
    b = loadImage("fnord2.png");

    PImage c;
    c = loadImage("fnord3.png");


    // draw background and x-axis
    //background(0, 255, 12);
    strokeWeight(0);

    void setup() {
        size(568, 380);
     // background(#F0F0E0);
     // stroke(0);
        fill(0);
        textFont(createFont("Arial",fontsize));
    //  redraw();
       
    }

    void keyPressed()
    {
	    if (key == 'a'){
		    show = c;
	    }

	    //var time = new Date().getTime() * 0.002;
	    if (key == CODED)
	    {
		    if(keyCode == ENTER)
		    {
			    status	= 0 - status;
			    show	= c;
		    }

		    if (jump != 'descend')
		    {
			    if (keyCode == UP )
			    {
				    jump = 'ascend';
			    }
		    }
		    if (keyCode == DOWN)
		    {
			    state = 'rest';
		    }
		    if (keyCode == LEFT)
		    {
			    state = 'left';
			    dirX = 1;
		    }
		    if (keyCode == RIGHT)
		    {
			    state = 'right';
			    dirX = 1;
		    }

		    if (keyCode == ESC)
		    {
			    show = c;
		    }

 	    }//end if keycoded

    }// end if key pressed



/////////////////////////////////////////////////// The Draw Function /////////////////////////////////////////////////		
    void draw() 
    { 
	    // draw graph
	    if (state == 'left')
	    {
		    x = x-(1 * dirX);
		    //	backg_x = backg_x + 1 ;
	    }
	    if (state == 'right')
	    {
		    x = x + (1 * dirX);
	     // backg_x = backg_x - 1 ;
	     	show = a;
	    }
	    if (state == 'rest')
	    {
	        show = a;
		    x = x ;
	        // backg_x = backg_x  ;
	    }
	    if (jump == 'ascend')
	    {
		    y = y-1;
		    show = b;
				    if (y <= -90)
				    {
					    jump = 'descend';
				    }
	    }
	    if (jump == 'descend')
	    {
		    show = a;
		    y=y+1;
		    if (y >= 0)
		    {
			    jump = 'rest';
		    }
	    }
	    if (jump == 'rest')
	    {
		    show = a;
		    y = 0;
		    dirY = -1;
	    }
	
        var startY = 380 - (sectionHeight * 2);
        var startX = 0;
	    destX = int(568 / 2 ) + x;
	    destY = int(380 / 2 ) + y + 77 ;// 60 pixels offset from centre
	    if (destX <= 10 )
		    {
			    destX = 12;
			    dirX = 1;
		    }
	    if (destX >= 520)
		    {
			    destX = 518;
			    dirx = -1 ;
		    }
	
	    background(143, 55, 14);
	    image(show, destX, destY)	;
	    image(b_ninja,0, 180);
	    image(r_ninja,470, 180);

	    for (var i = 0; i < sections; i += 1)
		    {
			    for (var j = 1; j <= yValues[i]; j += 1)
			    {
			        //println(j);
				    fill(139, j/8*255, 204);
				    rect(startX,startY,sectionWidth,sectionHeight);
				    startY -= sectionHeight + space;
				    text("startY:" + int(startY),(100 * (j-1)),i*40);
			    }   
			    startX += sectionWidth + space;
			    text("st_X: " + int(startX),(sectionWidth * (j-1)),50);
			    startY += (sectionHeight + space)*yValues[i];
		    }
		    if (destX ==12){
			    text("left wall",0,20);
		    }
		    if (destX % sectionWidth<=10)
		    {
		        text("collision",0,20);
		    }
	    text(" x :" + destX,0,20);
	    text(" section width:" + sectionWidth,0,120);

	    //println("Hello ErrorLog!");	
		
    }	// End of Draw	
