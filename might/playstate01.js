/**
 * Created by techbot on 17/11/14.
 */
playState[1] = {
    init: function() {
        //Called as soon as we enter this state

    },
    preload: function() {

        game.load.image('bullet', 'bullet.png');
        game.load.image('enemyBullet', 'enemy-bullet.png');

       // var number = paddy(grid,3);
        //game.load.tilemap('world', 'grid' + number + '.json', null, Phaser.Tilemap.TILED_JSON);
        //load tiles
     
        for	(var index = 0; index < tile_names[grid].length; index++) {
            var filename = tile_names[grid][index];
            game.load.image(filename, '' + filename +'.png');
        }
        game.load.image('background', 'stage.png');
        game.load.image('toolbar', 'toolbar.png');
        game.load.image('red', 'strongman-red.png');
        game.load.image('black', 'elephant.png');
        game.load.image('shield', 'shield.png');
        game.load.image('health', 'health.png');
    },
    create: function() {
        background = game.add.tileSprite(0, 0, 800, 600, 'background'); 
        game.physics.startSystem(Phaser.Physics.ARCADE);
       // game.add.plugin(Phaser.Plugin.Tiled);
        //  Modify the world and camera bounds
        game.world.setBounds(boundsX1[grid], boundsY1[grid], boundsX2[grid], boundsY2[grid]);

        game.stage.backgroundColor = '#787878';

        //game.input.onDown.add(doSomething, this);

        //  Our bullet group
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(10, 'bullet');
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 1);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);
           // The enemy's bullets
        enemyBullets = game.add.group();
        enemyBullets.enableBody = true;
        enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets.createMultiple(10, 'enemyBullet');
        enemyBullets.setAll('anchor.x', 0.5);
        enemyBullets.setAll('anchor.y', 1);
        enemyBullets.setAll('outOfBoundsKill', true);
        enemyBullets.setAll('checkWorldBounds', true);
      //  var cacheKey = Phaser.Plugin.Tiled.utils.cacheKey;

        /////////////////// cache json file
    //    game.load.tiledmap(cacheKey('world', 'tiledmap'), 'grid' + grid + '.json', null, Phaser.Tilemap.TILED_JSON);
        ///////////////////// cache tiles
    //    for (var index = 0; index < tile_names[grid].length; index++) {
      //      var filename = tile_names[grid][index];
        //    game.load.image(cacheKey(filename, 'tileset', filename), '' + filename + '.png');
     //   }
     //   game.load.image(cacheKey('background', 'layer', 'background'), 'background.png');

          //  And some controls to play the game with
        cursors = game.input.keyboard.createCursorKeys();
        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        player      = game.add.sprite(parseInt(new_x + 80),parseInt(new_y+ 240), 'red');
		sprite2     = game.add.sprite(parseInt(new_x + 260),parseInt(new_y+ 230), 'black');
        sprite3     = game.add.sprite(new_x + 150, new_y + 230, 'shield');

        game.physics.enable(player, Phaser.Physics.ARCADE);
        game.physics.enable(sprite2, Phaser.Physics.ARCADE);
        game.physics.enable(sprite3, Phaser.Physics.ARCADE);

        player.body.enable =true;
        player.body.allowRotation = false;
        this.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);

/////////////////////////////////////////////place buildings//////
  //  The baddies!
    aliens = game.add.group();

    sprite2.enableBody = true;
    sprite2.physicsBodyType = Phaser.Physics.ARCADE;

    createAliens();




        //  The score
        scoreString = '';
        scoreText = game.add.text(150, 10, scoreString + score, { font: '24px Arial', fill: '#fff' });
  
  		//  Text
    	stateText = game.add.text(300,300,' ', { font: '24px Arial', fill: '#fff' });
    	stateText.anchor.setTo(0.5, 0.5);
    	stateText.visible = false;

    
        //  Lives
        lives = game.add.group();
        game.add.text(150, 70, '', { font: '24px Arial', fill: '#fff' });

        for (var i = 0; i < total_lives; i++)
        {
            var ship = lives.create(200 - 100 + (30 * i), 80, 'health');
            ship.anchor.setTo(0.5, 0.5);
            ship.angle = 90;
            ship.alpha = 0.9;
        }



        /* portal[1] = game.add.sprite(x1[grid],y1[grid], 'portal00001');
          portal[1]['dest']=portal_dest_1[grid];
          game.physics.enable(portal[1], Phaser.Physics.ARCADE);
          portal[2] = game.add.sprite(x2[grid], y2[grid], 'portal00002');
          game.physics.enable(portal[2], Phaser.Physics.ARCADE);
          portal[2]['dest']=portal_dest_2[grid];
          portal[3] = game.add.sprite(x3[grid], y3[grid], 'portal00003');
          game.physics.enable(portal[3], Phaser.Physics.ARCADE);
          portal[3]['dest']=portal_dest_3[grid];
          // game.add.tween(monster1).to({ x: 10 }, 10000, Phaser.Easing.Linear.None, true);
  */
///////////////////////////////////////////
    },
    update: function() {
/////////////////////////////////////////////////////////////////
cursors = game.input.keyboard.createCursorKeys();

      //  this.physics.arcade.collide(sprite, layer);
        //this.physics.arcade.collide(sprite2, layer);
        
         if (player.alive)
    {
        //  Reset the player, then check for movement keys
        player.body.velocity.setTo(0, 0);

        if (cursors.left.isDown && cursors.right.isUp)
        {
           // player.body.velocity.x = -200;
            block(sprite3);
        }
        else if (cursors.left.isUp)
        {
            //  player.body.velocity.x = 200;
            console.log('unblock');
            unblock(sprite3);
        }

        if (cursors.right.isDown && cursors.left.isUp)
        {
          //  player.body.velocity.x = 200;
           fireBullet();
        }
        //  Firing?
        if (fireButton.isDown)
        {
        //    fireBullet();
        }

        if (game.time.now > firingTimer)
        {
            enemyFires();
        }

        //  Run collision
        game.physics.arcade.overlap(bullets, sprite2, collisionHandler, null, this);
        game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
        game.physics.arcade.overlap(enemyBullets, sprite3, blockEnemyBullets, null, this);
    }

//////////////////////////////////////////////////////////////////////////////////
        
        
        
            //  Reset the players velocity (movement)
  //  player.body.velocity.x = 0;
 /*
    if (cursors.left.isDown)
    {
        //  Move to the left
     //   player.body.velocity.x = -150;
        
        console.log('left');
 
      //  player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
      //  player.body.velocity.x = 150;
 
    //    player.animations.play('right');
     console.log('right');
    }
    else
    {
        //  Stand still
       // player.animations.stop();
 
      //  player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
 //       player.body.velocity.y = -350;
    }
        
*/
        


///////////////////////collide buildings////////////////////////


       // game.physics.arcade.moveToXY(sprite, x, y, 100);


///////////////////////collide npc list////////////////////////

        for (var index = 0; index < npc_list.length; index++)
        {
            //console.log(key);
        //    this.physics.arcade.collide(sprite, add_npc[index], npc);
            //add_building[index].body.immovable = true;
        }

////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////



/*
        if ((sprite.body.x >=x-10) &&(sprite.body.x <=x+10)){
            sprite.body.velocity.x = 0;
            //console.log('x:' +sprite.body.velocity.x);
        }
        if ((sprite.body.y >=y-10) &&(sprite.body.y <=y+10)){
            sprite.body.velocity.y = 0;
            //console.log('y:' + sprite.body.velocity.y);
        }

        if ((sprite.body.velocity.x == 0)&&(sprite.body.velocity.y == 0)) {

            //console.log('both' + send);


            if (send == 1) {

                doSomething();
                send = 0;
            }
        }
*/
////////////////////////////////////////////////////////////////

/*
        if (cursors.up.isDown) {
            game.camera.y -= 4;
        }
        else if (cursors.down.isDown) {
            game.camera.y += 4;
        }
        if (cursors.left.isDown) {
            game.camera.x -= 4;
        }
        else if (cursors.right.isDown) {
            game.camera.x += 4;
        }
        //if (sprite2.x >= 300) {
        //}
     */   
        
    },
    render: function() {
        //   game.debug.spriteCoords(sprite, 32, 32);
// game.debug.cameraInfo(game.camera, 96, 64);
    }
};
