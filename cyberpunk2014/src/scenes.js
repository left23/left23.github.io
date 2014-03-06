Crafty.scene('Loading', function(){

		Crafty.e('2D, DOM, Text')
			.attr({ x: 0, y: 200 - 24, w: 200 })
			.text('Loading...');





	// Load our sprite map image
	Crafty.load([
	'assets/dorm-tiles-red.png', 
	'assets/player.png',
	'assets/zombie.png',
	'assets/building001.png', 
	'assets/building002.png', 
	'assets/building003.png', 	
	'assets/building004.png', 
	
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

		// Define the PC's sprite to be the first sprite in the third row of the
		//  animation sprite map
		Crafty.sprite(100, 'assets/player.png', {
			spr_player:  [31, 0],
		}, 0, 2);
       
       
        Crafty.sprite(100, 'assets/zombies.png', {
			spr_zombie:  [0, 0],
		}, 0, 2);
		
		
		Crafty.sprite(303,654, 'assets/building001.png', {
			spr_b001:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(184,198, 'assets/building002.png', {
			spr_b002:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(174,344, 'assets/building003.png', {
			spr_b003:  [0, 0],
		}, 0, 2);
		
		Crafty.sprite(364,428, 'assets/building004.png', {
			spr_b004:  [0, 0],
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

    var Hero =   Crafty.e("Hero").at(3, 3); 
 this.occupied[10][10] = true;
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
        
           if (Math.random() < 1.0 ) 
            {
            // Place a bush entity at the current tile
            // var bush_or_rock = (Math.random() > 0.3) ? 'Bush' : 'Rock';
            Crafty.e('Zombie').at(x, y);
           
            }
            
            else
             {
          
          
            Crafty.e('b001').at(10, 100);
          
            // Place a bush entity at the current tile
            // var bush_or_rock = (Math.random() > 0.3) ? 'Bush' : 'Rock';
           // Crafty.e('Bush').at(x, y);
            this.occupied[x][y] = true;
          
          
          
          
          
            }
            
              Crafty.e('Zombie').at(12, 10);
             Crafty.e('b001').at(-1,5);
             Crafty.e('b002').at(10,16);
             Crafty.e('b003').at(15,11);
             Crafty.e('b004').at(22,11);
            // Place a bush entity at the current tile
            // var bush_or_rock = (Math.random() > 0.3) ? 'Bush' : 'Rock';
           // Crafty.e('Bush').at(x, y);
            //this.occupied[10][10] = true;
            
             Crafty.e('b001').at(24,5);
             Crafty.e('b002').at(28,16);
       //      Crafty.e('b003').at(42,11);
       //      Crafty.e('b004').at(48,11);
          //   Crafty.e('b004').at(64,11);
          //   Crafty.e('b001').at(84,5);
            
            
            
            
            
            
            
            
            
            
            
            
         } 
   
           
 
            
            
        }
    }
 /////////////////////////////////////////////////////////////////////       
    var max_villages = 5;
    for (var x = 0; x < Game.map_grid.width; x++)
    {
        for (var y = 0; y < Game.map_grid.height; y++)
        {
            if (Math.random() < 0.03)
            {
               
                 
                if (Crafty('Village').length < max_villages && !this.occupied[x][y])
              
              //  if (Crafty('Village').length < max_villages)
                {
                   Crafty.e('Village').at(x, y);
                }
            }
        }
    }

////////////////////////////////////////////////////////////////////////    
    Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e)
    {
        console.log(e.realY , Hero.y,e.realX , Hero.x );

        Crafty.e('ball').at(Hero.x + 100 ,Hero.y + 10);
            
/////////////////////////////////////////////////////////////////// 
 /* if (e.realY >= Hero.y+30)
            {
                 if (e.realX >= Hero.x + 30)
                {
                     dX = 10;
                }
                else if (e.realX <= Hero.x - 30)
                {
                    dX = -10;
                }
                else
                {
                    dX = 0;
                }
                dY = 10;
            }
           
            
///////////////////////////////////////////////////////////////////        
     else if (e.realY+30 <= Hero.y)
            {
               if (e.realX < Hero.x - 50)
                {
                     dX = -10;
                }
                else if (e.realX > Hero.x + 50)
                {
                    dX = 10;
                }
                else
                {
                    dX = 0;
                }
                dY = -10;
            }
            
    */        
            
            
            
//////////////////////////////////////////////////////////////////////
        if (e.realX >= Hero.x+30)
            {
            
            
            
                if (e.realY-130 >= Hero.y )
                {
                     dY = 10;
                }
                else if (e.realY+310 <= Hero.y )
                {
                    dY = -10;
                }
                else
                {
                    dY = 0;
                }
                dX=10;
            }
///////////////////////////////////////////////////////////////////        
            else if (e.realX+30 <= Hero.x)
            {
                if (e.realY+330 <= Hero.y )
                {
                    dY = -10;
                }
                else if (e.realY-330 >= Hero.y )
                {
                    dY = 10;
                }
                else
                {
                    dY = 0;
                }
                dX=-10;
            }
///////////////////////////////////////////////////////////////////        
         
///////////////////////////////////////////////////////////////////        
    });
  
});
Game.start();
