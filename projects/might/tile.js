var game = new Phaser.Game(636, 400, Phaser.AUTO, "world");

//All parameters are optional but you usually want to set width and height
//Remember that the game object inherits many properties and methods!
var map;
var layer;
var layer3;
var layer4;
var layer2;
var x;
var y;
var rhythmic;
var melody;
var bass;
var phaser;
var sprite;
var sprite2;
var grid;
var cursors;

///////////////////////////////////////////////////////////////////////////////////////////////////////

function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}


function collisionHandler (bullet, alien) {

    //  When a bullet hits an alien we kill them both
    //bullet.kill();
    alien.kill();

    //  Increase the score
    score += 20;
    scoreText.text = scoreString + score;

    //  And create an explosion :)
  //  var explosion = explosions.getFirstExists(false);
  //  explosion.reset(alien.body.x, alien.body.y);
  //  explosion.play('kaboom', 30, false, true);
/*
    if (aliens.countLiving() == 0)
    {
        score += 1000;
        scoreText.text = scoreString + score;

        enemyBullets.callAll('kill',this);
        stateText.text = " You Won, \n Click to restart";
        stateText.visible = true;

        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }
*/
}

function enemyHitsPlayer (player,bullet) {
    
    bullet.kill();

    live = lives.getFirstAlive();

    if (live)
    {
        live.kill();
    }

    /*
    //  And create an explosion :)
    var explosion = explosions.getFirstExists(false);
    explosion.reset(player.body.x, player.body.y);
    explosion.play('kaboom', 30, false, true);

	*/
    // When the player dies
    if (lives.countLiving() < 1)
    {
   
    	
        player.kill();
        enemyBullets.callAll('kill');

        stateText.text=" GAME OVER \n Click to restart";
        stateText.visible = true;

        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }
   

}

function enemyFires () {

    //  Grab the first bullet we can from the pool
    enemyBullet = enemyBullets.getFirstExists(false);

    //livingEnemies.length=1;

   // aliens.forEachAlive(function(alien){

        // put every living enemy in an array
    //    livingEnemies.push(alien);
  //  });


   // if (enemyBullet && livingEnemies.length > 0)
  //  {

        //var random=game.rnd.integerInRange(0,livingEnemies.length-1);

        // randomly select one of them
        //var shooter=livingEnemies[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(sprite2.body.x, sprite2.body.y+40);

        game.physics.arcade.moveToObject(enemyBullet,player,1200);

       timer_1 = Math.floor((Math.random() * 1200) + 200); ;

        firingTimer = game.time.now + timer_1;
   // }
}

function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(player.x, player.y + 8);
            bullet.body.velocity.x = 1600;
            bulletTime = game.time.now + 1200;
        }
    }

}

function block () {
        //  And fire it
        sprite3.body.enable = true;
        sprite3.alpha = 0.99999;
}

function unblock () {
    sprite3.body.enable = false;
    sprite3.alpha = 0.1;
}

function blockEnemyBullets(one,two) {
    two.kill();
}

function resetBullet (bullet) {
    //  Called if the bullet goes out of the screen
    bullet.kill();
}

function restart () {

    //  A new level starts
    score=0;
    	scoreText.text = scoreString + score;
    //resets the life count
    lives.callAll('revive');
    //  And brings the aliens back from the dead :)
   // aliens.removeAll();
   // createAliens();
   
   

    //revives the player
    player.revive();
    //hides the text
    stateText.visible = false;

}
function createAliens () {


    //var alien = aliens.create(x * 48, y * 50, 'black');
    //alien.anchor.setTo(0.5, 0.5);
    //sprite3.body.enable = false;
    //sprite3.alpha = 0.1;
}

function setupInvader (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('kaboom');

}

function descend() {
    aliens.y += 10;
}
    grid = 1;
    game.state.add('next', playState[grid]);
    game.state.start('next');


