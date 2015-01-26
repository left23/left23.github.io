Crafty.scene('Loading', function(){

		Crafty.e('2D, DOM, Text')
			.attr({ x: 0, y: 200 - 24, w: 200 })
			.text('Loading...');





	// Load our sprite map image
	Crafty.load([
	'assets/dorm-tiles-red.png', 
	'assets/player.png',
	'assets/zombies.png',
	
	
	'assets/death.png',	
	
	
	'assets/building001-l.png', 
	'assets/building001.png', 
	'assets/building001-r.png', 
	
	
	'assets/building002.png', 
	'assets/building003.png', 	
	'assets/building004.png',
	'assets/building005.png',	
	'assets/building006.png',	
	'assets/building007.png',
	'assets/building008_l.png',
	'assets/building008.png',
	'assets/building008_r.png',		
	'assets/building009.png',
	'assets/building009_l.png',	
	'assets/building009_r_u.png',
	'assets/building009_r_d.png',	
		
	'assets/building0010.png',	
	
	'assets/eol1freak.png',
	
	
	
		
	 
	
	'assets/backg.png', 
	
	
	'http://desolate-caverns-4829.herokuapp.com/assets/door_knock_3x.mp3', 
	'http://desolate-caverns-4829.herokuapp.com/assets/door_knock_3x.ogg', 
	'http://desolate-caverns-4829.herokuapp.com/assets/door_knock_3x.aac'], 
	
	function(){
		// Once the images are loaded...

		Crafty.sprite(32, 'assets/dorm-tiles-red.png', {
			spr_tree:    [6, 2],
			spr_bush:    [3, 3],
			spr_village: [0, 1]
		});
		
		
		
		Crafty.sprite(32, 'assets/disk.jpg', {

			spr_village: [0,0]
		});
		
		Crafty.sprite(1000,5, 'assets/death.png', {

			spr_death: [0,0]
		});	
		
		

		// Define the PC's sprite to be the first sprite in the third row of the
		//  animation sprite map
		Crafty.sprite(100, 'assets/player.png', {
			spr_player:  [31, 0],
		}, 0, 2);
       
       
        Crafty.sprite(100, 'assets/zombies.png', {
			spr_zombie:  [0, 0],
		}, 0, 2);
		
		
		Crafty.sprite(100,150, 'assets/eol1freak.png', {
			spr_eol1freak:  [0, 0],
		}, 0, 2);
		
		
	/*	
		Crafty.sprite(5, 'assets/zombies.png', {
			spr_zombie:  [0, 0],
		}, 0, 2);
		
		*/
		
		
		
		
		
		
		Crafty.sprite(43,654, 'assets/building001-l.png', {
			spr_b001_l:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(197,654, 'assets/building001.png', {
			spr_b001:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(64,654, 'assets/building001-r.png', {
			spr_b001_r:  [0, 0],
		}, 0, 2);
		
		
		
		
		
		
		
		Crafty.sprite(64,654, 'assets/building001-r.png', {
			spr_b001_r2:  [0, 0],
		}, 0, 2);
		
		
		
		
		Crafty.sprite(184,198, 'assets/building002.png', {
			spr_b002:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(174,344, 'assets/building003.png', {
			spr_b003:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(728,428, 'assets/building004.png', {
			spr_b004:  [0, 0],
		}, 0, 2);
		
		
		Crafty.sprite(376,447, 'assets/building005.png', {
			spr_b005:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(450,339, 'assets/building006.png', {
			spr_b006:  [0, 0],
		}, 0, 2);


		Crafty.sprite(474,328, 'assets/building007.png', {
			spr_b007:  [0, 0],
		}, 0, 2);


		Crafty.sprite(299,685, 'assets/building008_l.png', {
			spr_b008_l:  [0, 0],
		}, 0, 2);

		Crafty.sprite(150,514, 'assets/building008.png', {
			spr_b008:  [0, 0],
		}, 0, 2);

		Crafty.sprite(78,508, 'assets/building008_r.png', {
			spr_b008_r:  [0, 0],
		}, 0, 2);







		Crafty.sprite(156,578, 'assets/building009_l.png', {
			spr_b009_l:  [0, 0],
		}, 0, 2);


		Crafty.sprite(277,578, 'assets/building009.png', {
			spr_b009:  [0, 0],
		}, 0, 2);


		Crafty.sprite(714,354, 'assets/building009_r_u.png', {
			spr_b009_r_u:  [0, 0],
		}, 0, 2);

        Crafty.sprite(714,225, 'assets/building009_r_d.png', {
			spr_b009_r_d:  [0, 0],
		}, 0, 2);




		Crafty.sprite(298,628, 'assets/building010.png', {
			spr_b010:  [0, 0],
		}, 0, 2);

		Crafty.sprite(352,840, 'assets/building011.png', {
			spr_b011:  [0, 0],
		}, 0, 2);


		Crafty.sprite(1086,582, 'assets/building012-l.png', {
			spr_b012_l:  [0, 0],
		}, 0, 2);

		Crafty.sprite(630,840, 'assets/building012.png', {
			spr_b012:  [0, 0],
		}, 0, 2);


		Crafty.sprite(724,217, 'assets/building012-r.png', {
			spr_b012_r:  [0, 0],
		}, 0, 2);





		// Now that our sprites are ready to draw, start the game
		Crafty.scene('Game');
	})
});

// Game scene
// -------------
// Runs the core gameplay loop
Crafty.scene('Game', function() 
{
 
    this.occupied = new Array(Game.map_grid.width);
    
    for (var i = 0; i < Game.map_grid.width; i++) 
    {
        this.occupied[i] = new Array(Game.map_grid.height);
        for (var y = 0; y < Game.map_grid.height; y++) 
        {
            this.occupied[i][y] = false;
        }
    }

var options = {
    maxParticles: 150,
    size: 18,
    sizeRandom: 4,
    speed: 1,
    speedRandom: 1.2,
    // Lifespan in frames
    lifeSpan: 29,
    lifeSpanRandom: 7,
    // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
    angle: 65,
    angleRandom: 34,
    startColour: [255, 131, 0, 1],
    startColourRandom: [48, 50, 45, 0],
    endColour: [245, 35, 0, 0],
    endColourRandom: [60, 60, 60, 0],
    // Only applies when fastMode is off, specifies how sharp the gradients are drawn
    sharpness: 20,
    sharpnessRandom: 10,
    // Random spread from origin
    spread: 10,
    // How many frames should this last
    duration: -1,
    // Will draw squares instead of circle gradients
    fastMode: false,
    gravity: { x: 0, y: 0.1 },
    // sensible values are 0-3
    jitter: 0
}

//Crafty.e("2D,Canvas,Particles").particles(options);


    var Hero =   Crafty.e("Hero").at(3, 3); 
 //   this.occupied[10][10] = true;
    // Player character, placed at 5, 5 on our grid
    //this.Hero = Crafty.e('Hero').at(5, 5);
    //this.occupied[this.Hero.at().x][this.Hero.at().y] = true;

////////////////////////////////////////////////////////////////////////    
    
    for (var x = 0; x < Game.map_grid.width; x++)
    {
        for (var y = 0; y < Game.map_grid.height; y++)
        {
            var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
         
            if (at_edge) 
            {
                // Place a tree entity at the current tile
           //     Crafty.e('Tree').at(x, y);
             //   this.occupied[x][y] = true;
          
            } 
                
            else if (Math.random() < 0.01 && !this.occupied[x][y]) 
         
        {
        
           if (Math.random() < .7 ) 
            {
            // Place a bush entity at the current tile
            // var bush_or_rock = (Math.random() > 0.3) ? 'Bush' : 'Rock';
       //     Crafty.e('Zombie').at(x, y);
           
            }
            
            else
             {
 
            // Place a bush entity at the current tile
            // var bush_or_rock = (Math.random() > 0.3) ? 'Bush' : 'Rock';
           // Crafty.e('Bush').at(x, y);
            this.occupied[x][y] = true;
       
          
            }
            
            Crafty.e('Bush').at(5, 0);
            Crafty.e('Bush').at(4, 0);
          
            Crafty.e('Zombie').at(29, 10);
             
             
             
             Crafty.e('Death').at(200,640);
             Crafty.e('Death').at(1200,640);
             Crafty.e('Death').at(2200,640);
             Crafty.e('Death').at(3200,640);
             Crafty.e('Death').at(4200,640);
             Crafty.e('Death').at(5200,640);            
             Crafty.e('Death').at(6200,640);             
              Crafty.e('Death').at(7200,640);            
             
             
             
             Crafty.e('b001_l').at(1,0);
             Crafty.e('b001').at(44,0);
             Crafty.e('b001_r2').at(241,0);
          
          
           
           Crafty.e('Bush').at(22, 6);
           Crafty.e('b003').at(480,290);
           
           Crafty.e('Village').at(480,270);
           
           
            Crafty.e('Bush').at(42, 6);
             
            Crafty.e('Village').at(770, 180);
            Crafty.e('b001').at(570,0);
            
            
            Crafty.e('Bush').at(52, 6);
             Crafty.e('b004').at(680,210);
             
             Crafty.e('Village').at(1170, 180);
             Crafty.e('Village').at(1570, 180);
             
             Crafty.e('b004').at(1580,210);
             Crafty.e('b002').at(1980,350);
            
            Crafty.e('Zombie').at(60, 6);
              
              Crafty.e('Bush').at(68, 6);
              
              
              
              
              
              
              Crafty.e('b005').at(2210,200);
           Crafty.e('b006').at(2610,320);
            Crafty.e('b007').at(2930,350);             
              
              
          
          
          
           Crafty.e('b008_l').at(3310,0);
           Crafty.e('b008').at(3609,324);
           Crafty.e('b008_r').at(3759,0);
           
           
           
           
           
           Crafty.e('b009_l').at(4055,60);
           Crafty.e('b009').at(4210,60);
           Crafty.e('b009_r_u').at(4490,60);
           Crafty.e('b009_r_d').at(4490,420);
           
           
           
           
           Crafty.e('b010').at(5330,100); 
     
     
           Crafty.e('b011').at(5610,0);
           
           Crafty.e('b012_l').at(6210,120);
           Crafty.e('b012').at(6430,150);
           
           Crafty.e('eol1freak').at(6430,6);
           
           
           
                 
           Crafty.e('b012_r').at(6830,150);
           
                       
            // Place a bush entity at the current tile
            // var bush_or_rock = (Math.random() > 0.3) ? 'Bush' : 'Rock';
           // Crafty.e('Bush').at(x, y);
            //this.occupied[10][10] = true;
            
          //   Crafty.e('b001').at(25,0);
             
             
             
             
             
           
             
             
            
      //       Crafty.e('b003').at(42,0);
            
        //     Crafty.e('b004').at(64,11);
      /*         Crafty.e('b001').at(84,0);
             Crafty.e('b001').at(90, 0);
     */    
         } 
        
        }
    }
 /////////////////////////////////////////////////////////////////////       
    var max_villages = 5;
    
    
    
    
  
    
  
    
    
   
    
    
    
    
    
    for (var x = 0; x < Game.map_grid.width; x++)
    {
        for (var y = 0; y < Game.map_grid.height; y++)
        {
            if (Math.random() < 0.33)
            {
               
                 
                if (Crafty('Village').length < max_villages && !this.occupied[x][y])
              
              //  if (Crafty('Village').length < max_villages)
                {
               //    Crafty.e('Village').at(x, 10);
                }
            }
        }
    }

////////////////////////////////////////////////////////////////////////    
    Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e)
    {
        console.log(e.realY , Hero.y,e.realX , Hero.x );
        
            
//////////////////////////////////////////////////////////////////////
        if (e.realX >= Hero.x+30)
            {
            
             Hero.unflip();

                 dY = 0;
                dX=10;
            }
///////////////////////////////////////////////////////////////////        
            else if (e.realX+30 <= Hero.x)
            {
            
             Hero.flip();
            

                dX=-10;
                dY = 0;
            }
   
            if (dX == 10) { 
      
      Crafty.e('ball').at(Hero.x + 100 ,Hero.y + 30);
      }
      else
      { 
      
      Crafty.e('ball').at(Hero.x - 10 ,Hero.y + 30);
      }
     
            
            
///////////////////////////////////////////////////////////////////        
         
///////////////////////////////////////////////////////////////////        
    });
  
});
Game.start();
