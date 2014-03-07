// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid',
{
  init: function() 
  {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },
  // Locate this entity at the given position on the grid
  at: function(x, y)
  {
    if (x === undefined && y === undefined) 
    {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else 
    {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
   //   this.attr({ x: x , y: y  });
      return this;
    }
  }
});

//////////////////////////////////////////////////////////

Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Grid,Canvas');
  },
});

/////////////////////////////////////////////////////////
Crafty.c('Zombie', 
{
    init: function() 
    {
        var Zombie      = this;
        var Hero        = Crafty("Hero");

        Hero.bind("Moved", function(oldPos)
        {
            if (oldPos.x < Zombie.x)
            {
                //stop = 0;
                Zombie.flip();
            }
            else
            {
                //stop = 0;
                Zombie.unflip();
            }
        });
        var animation_speed = 8;
        this.requires('Actor, Solid,2D,spr_zombie, Twoway,Collision,SpriteAnimation, Gravity')
        
        .reel('ZombieMoving',600, 0, 0, 30)
        .gravity("platform")
        .animate('ZombieMoving', animation_speed, -1)
        .onHit('ball', this.killZombie)
        .onHit('Bush', function ()
        {
            stop=1;
            if (d_Zombie_x == -1){
           this.x += 5;
              console.log('left');
              this.animate('ZombieMoving', animation_speed, -1);
              
            }
            else if (d_Zombie_x == 1){
            this.x -= 5;
              console.log('right');
              this.animate('ZombieMoving', animation_speed, -1);
            }
        },
        function ()
        {
            stop=0;
        })
        .bind('EnterFrame', function () 
        {   
            if (Zombie.x > Hero.x)
            {
                
                if (stop != 1)
                {
                    d_Zombie_x = -1;
                }
                else
                {
                    d_Zombie_x = 0;
                }
            }    
            if (Zombie.x < Hero.x)
            {
                if (stop!=1)
                {
                    d_Zombie_x = 1;
                }
            }  
            this.x = this.x + d_Zombie_x;
         })
    },
        killZombie: function() 
        {
            var Zombie = this;
            Zombie.destroy();
        },

// Stops the movement
        stopMovement: function() 
        {
            stop =1;
            console.log (stop);
    },
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// A Tree is just an Actor with a certain color
Crafty.c('Tree', {
  init: function() {
    this.requires('Actor,spr_tree, Solid,platform')
  },
});
// A Tree is just an Actor with a certain color
Crafty.c('b001', {
  init: function() {
    this.requires('Actor,spr_b001, Solid,platform')
  },
});

// A Tree is just an Actor with a certain color
Crafty.c('b002', {
  init: function() {
    this.requires('Actor,spr_b002, Solid,platform')
  },
});

// A Tree is just an Actor with a certain color
Crafty.c('b003', {
  init: function() {
    this.requires('Actor,spr_b003, Solid,platform')
  },
});

// A Tree is just an Actor with a certain color
Crafty.c('b004', {
  init: function() {
    this.requires('Actor,spr_b004, Solid,platform')
  },
});

// A Bush is just an Actor with a certain color
Crafty.c('Bush', {
  init: function() {
    this.requires('Actor, spr_bush, Solid,platform')
  },
});

 // A village is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Village',
{
    init: function() 
    {
        this.requires('Actor, spr_village')
    },
    collect: function() 
    {
        this.destroy();
    }
});

/////////////////////////////////////////////////////////

Crafty.c('ball', 
{
    speed: 25,
    init: function()
    {   
        var ball = this;
        this.requires("2D, Color, Collision,Tween, Canvas, spr_player");
        this.attr({ h: 5 , w: 5 });
	    this.bind('EnterFrame', function () 
        { 	
        	this.x = this.x + dX;
		    this.y = this.y + dY;
            setTimeout(function () 
            { 
                ball.destroy(); 
            }, 320);
            if (this.y > 860)
            {
				this.destroy();
			}
        });
       this.tween({ h: 0, w: 0,alpha: 0 }, 420); 
    },
    at: function(x, y)
    {
        if (x === undefined && y === undefined) 
        {
          return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
        } else 
        {
          //this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
          this.attr({ x: x , y: y  });
          return this;
        }
    }
});

///////////////////////////////////////////////////////////////

Crafty.c('Hero',
{
    init: function() 
    {
        var Hero = this;

        Crafty.addEvent(Hero, Crafty.stage.elem, "mousedown", Hero.onMouseDown);
        this.requires('Fourway,Grid,2D, Player,Tween, Controls, Collision,Mouse,Keyboard,Canvas,spr_player,SpriteAnimation,Gravity')
        .attr({ h: 100, w:100 })
        .fourway(8)
        .bind('EnterFrame', function () 
        { 	
           Crafty.viewport.centerOn(Crafty('Hero'),200);
        })
        .gravity("platform")
        .stopOnSolids()
        .onHit('Village', this.visitVillage)
        .reel('PlayerMoving', 600, 0, 0, 30)
        .reel('Playerstanding', 600, 31, 0, 1)
        .animate('PlayerMoving', animation_speed, -1)
        ;
        var animation_speed = 8;
        
        this.bind('NewDirection', function(data) 
        {

            if (data.x > 0) 
            {
                Hero.animate('PlayerMoving', animation_speed, -1);
                Hero.unflip();
            } 
            else if (data.x < 0) 
            {
                Hero.animate('PlayerMoving', animation_speed, -1);
                Hero.flip();
            } 
            else
            {
                this.animate('Playerstanding', animation_speed, -1);
                this.pauseAnimation();
            }
        });
     },   
        // Registers a stop-movement function to be called when
        // this entity hits an entity with the "Solid" component
        stopOnSolids: function()
        {
            this.onHit('Solid', this.stopMovement);
            return this;
        },

        // Stops the movement
        stopMovement: function() 
        {
            this._speed = 0;
            if (this._movement)
            {
                this.x -= this._movement.x;
                this.y -= this._movement.y;
            }
        },

        // Respond to this player visiting a village
        visitVillage: function(data)
        {
            villlage = data[0].obj;
            villlage.collect();
            disks=disks-1;
            init();
        }
});
