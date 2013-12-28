var keyReleased=function(){
    if(keyCode===RIGHT||keyCode===LEFT){
    pwait=false;
    plegsmoving=false;
    }
};
var hp=100;
var drawBattle=function() {
    background(0, 196, 255);
    noStroke();
    fill(125, 82, 82);
    ellipse(200,370,250,150);
    fill(97, 72, 72);
    rect(217,276,10,43);
    rect(152,288,10,43);
    fill(34, 168, 0);
    ellipse(222,276,30,30);
    ellipse(156,288,30,30);
    stroke(0, 0, 0);
    if(pfacingLeft){
    fill(0, 255, 0);
    rect(playerX,259,hp/2,10);
    }
    else{
        fill(0, 255, 0);
        rect(playerX-55,259,hp/2,10);
    }
    translate(playerX,300);
    if(!pfacingLeft){
        translate(-58,0);
    }
    translate(25,21);
    rotate(plegRot);
    fill(163, 118, 118);
    rect(0,0,8,28,2);
    rotate(-plegRot*2);
    rect(0,0,8,28,2);
    rotate(plegRot);
    translate(-25,-21);
    rect(21,-9,15,31,2);
    fill(224, 175, 175);
    ellipse(29,-16,20,20);
    if(pfacingLeft){
        fill(105, 72, 72);
        arc(29,-16,20,20,-161,37);
    }
    else{
        fill(105, 72, 72);
        arc(29,-16,20,20,151,347);
    }
    if(pfacingLeft){
        rotate(-pswordRotate);
    }
    else{
        translate(58,0);
        rotate(pswordRotate);
    }
    fill(166, 166, 166);
    triangle(0,0,5,-13,-5,-13);
    triangle(0,-38,5,-13,-5,-13);
    fill(110, 86, 86);
    rect(-8,0,16,5);
    rect(-3,5,6,10);
    if(pfacingLeft){
        rotate(pswordRotate);
        rotate(-20);
        fill(163, 118, 118);
        rect(-3,7,33,5,2);
    }
    else{
        rotate(-pswordRotate);
        rotate(20);
        fill(163, 118, 118);
        rect(-29,7,33,5,2);
    }
    resetMatrix();
    if(keyIsPressed&&keyCode===DOWN&&pswordRotate===20){
        protateSpeed=10;
    }
    pswordRotate+=protateSpeed;
    if(pswordRotate>50){
        protateSpeed=-10;
    }
    if(pswordRotate<20){
        pswordRotate=20;
        protateSpeed=0;
    }
    if(keyIsPressed&&keyCode===RIGHT){
        playerX+=5;
        pfacingLeft=false;
        plegsmoving=true;
    }
    if(keyIsPressed&&keyCode===LEFT){
        playerX-=5;
        pfacingLeft=true;
        plegsmoving=true;
    }
    if(plegsmoving===true&&pwait===false){
        plegSpeed=10;
        pwait=true;
    }
    if(plegRot>50){
        plegRot=50;
        plegSpeed=-10;
    }
    if(plegRot<-50){
        plegRot=-50;
        plegSpeed=10;
    }
    plegRot+=plegSpeed;
    if(plegRot===0&&pwait===false){
        plegSpeed=0;
    }
    if(protateSpeed!==0){
        plegRot=0;
    }
    for(i=0;i<5;i++){
        if(enhp[i]>0){
            translate(enX[i],300);
            fill(255, 0, 0);
            rect(-53,-41,enhp[i]/2,10);
            translate(-58,0);
            translate(25,21);
            rotate(legRot[i]);
            fill(0, 72, 255);
            rect(0,0,8,28,2);
            rotate(-legRot[i]*2);
            rect(0,0,8,28,2);
            rotate(legRot[i]);
            translate(-25,-21);
            rect(21,-9,15,31,2);
            fill(150);
            ellipse(29,-16,20,20);
            fill(255, 201, 201);
            arc(29,-16,20,20,334,372);
            translate(58,0);
            rotate(swordRotate[i]);
            fill(173, 173, 173);
            triangle(0,0,5,-13,-5,-13);
            triangle(0,-38,5,-13,-5,-13);
            fill(110, 86, 86);
            rect(-8,0,16,5);
            rect(-3,5,6,10);
            rotate(-swordRotate[i]);
            rotate(20);
            fill(150);
            rect(-29,7,33,5,2);
            resetMatrix();
            if(enX[i]<playerX+5&&enX[i]>playerX-5&&swordRotate[i]===20&&pfacingLeft){
                rotateSpeed[i]=10;
            }
            else if(enX[i]<playerX+5-55&&enX[i]>playerX-5-55&&swordRotate[i]===20&&pfacingLeft!==true){
                rotateSpeed[i]=10;
            }
            swordRotate[i]+=rotateSpeed[i];
            if(swordRotate[i]>50){
                rotateSpeed[i]=-10;
                hp--;
            }
            if(swordRotate[i]<20){
                swordRotate[i]=20;
                rotateSpeed[i]=0;
            }
            if(pfacingLeft){
            if(playerX>enX[i]){
                enX[i]+=legsmovingspeed[i];
                legsmoving[i]=true;
            }
            if(playerX<enX[i]){
                enX[i]-=legsmovingspeed[i];
                legsmoving[i]=true;
            }
            if(enhp[i]<12){
                gold++;
            }
        }
        else{
        if(playerX-55>enX[i]){
            enX[i]+=legsmovingspeed[i];
            legsmoving[i]=true;
        }
        if(playerX-55<enX[i]){
            enX[i]-=legsmovingspeed[i];
            legsmoving[i]=true;
        }   
        }
        if(legsmoving[i]===true&&wait[i]===false){
            legSpeed[i]=10;
            wait[i]=true;
        }
        if(legRot[i]>50){
            legRot[i]=50;
            legSpeed[i]=-10;
        }
        if(legRot[i]<-50){
            legRot[i]=-50;
            legSpeed[i]=10;
        }
        legRot[i]+=legSpeed[i];
        if(legRot[i]===0&&wait===false){
            legSpeed[i]=0;
        }
        if(rotateSpeed[i]!==0){
            legRot[i]=0;
        }
        if(rotateSpeed[i]!==0&&pswordRotate>40){
            if(sword===false){
                enhp[i]-=3;
            }
            if(sword===true){
                enhp[i]-=6;
            }
        }
        }
    }
    noStroke();
    fill(0, 255, 68);
    rect(-10,350,410,410);
    if(hp<0){
        noLoop();
    }
};
var myfont=createFont("serif",17);
var drawButton = function(button_text, x, y, length) {
    textFont(myfont,17);
    over_button = false;
    var outline = color;
    var r = 232;
    var g=193;
    var b=102;
    var greyVB = 220;
    noStroke();
    if (mouseX >= x && mouseX <= x + length && mouseY >= y && mouseY <= y + button_height) {
        over_button = true;
        if (mouseIsPressed) {
                x -=2;
                y += 2;
        }
    }
    fill(r, g, b);
    rect(x, y, length, button_height, 2);
    textAlign(CENTER,CENTER);
    fill (0, 0, 0);
    textSize(17);
    text (button_text, x + length/2, y + button_height/2.2);
    textAlign(LEFT, 0);
};
var mouseReleased=function(){
    pressed=true;
};
