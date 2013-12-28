var sword=false;
var gold = 10;
var bread = 2;
var wood = false;
var x = 205;
var y = 200;
var button_height = 30;
var over_button;
var pressed=false;
var area="town";
var enX=[];
var wait=[];
var swordRotate=[];
var rotateSpeed=[];
var legRot=[];
var legSpeed=[];
var legsmoving=[];
var legsmovingspeed=[];
var enhp=[];
for(var i=0;i<10;i++){
    enX[i]=-i;
    wait[i]=false;
    legsmoving[i]=false;
    swordRotate[i]=20;
    rotateSpeed[i]=0;
    legRot[i]=0;
    legSpeed[i]=0;
    legsmovingspeed[i]=random(3,5);
    enhp[i]=100;
}
var playerX=200;
var pswordRotate=20;
var protateSpeed=0;
var pfacingLeft=true;
var plegRot=0;
var plegSpeed=0;
var plegsmoving=false;
var pwait=false;
var townsa="No other towns unlocked";
frameRate(30);


void setup() {
		    size(568, 380);
		 //    background(#F0F0E0);
		 //   stroke(0);
		    fill(0);
		    textFont(createFont("Arial",fontsize));
	 //	    redraw();
		   
      };


void keyReleased(){
    if(keyCode===RIGHT||keyCode===LEFT){
    pwait=false;
    plegsmoving=false;
    }
};






var hp=100;

var myfont=createFont("serif",17);

void drawButton (button_text, x, y, length) {
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
        if (mousePressed) {
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

void mouseReleased(){
    pressed=true;
};



//////////////////////////////////////////////////////////////////////////////////////
void draw() {
    noStroke();
    textFont(myfont,17);
    if(area==="town"){
        background(0, 196, 255);
        fill(0, 255, 68);
        rect(0,300,400,150);
        fill(97, 66, 66);
        rect(45,200,20,100);
        fill(43, 179, 22);
        ellipse(55,200,70,70);
        fill(173, 173, 173);
        rect(120,230,80,50);
        rect(110,250,100,50);
        fill(89, 68, 68);
        arc(160,300,40,70,-179,0);
        fill(10, 10, 10);
        text("Bakery",135,250);
        drawButton("Bakery",107,311,100);
        if(over_button&&pressed){
            area="bakery";
        }
        drawButton("Forest",4,311,100);
        if(over_button&&pressed){
            area="forest";
        }
        textFont(myfont,12);
        fill(102, 74, 74);
        rect(230,250,60,50,10);
        rect(230,260,60,40);
        fill(145, 145, 145);
        text("Market",240,260);
        textFont(myfont,17);
        rect(245,270,30,30);
        drawButton("Market",210,311,100);
        if(over_button&&pressed){
            area="market";
        }
        drawButton("Credits",107,344,100);
        if(over_button&&pressed){
            area="credits";
        }
        drawButton("Inventory",4,344,100);
        if(over_button&&pressed){
            area="inventory";
        }
        drawButton("Battle",313,311,84);
        if(over_button&&pressed){
            area="battle";
            for(var i=0;i<5;i++){
                enhp[i]=100;
                enX[i]=-50*i;
            }
        }
        drawButton("More Towns",210,344,100);
        if(over_button&&pressed){
            area="towns";
        }
    }
    if(area==="battle"){
        stroke(0, 0, 0);
        drawBattle();
        if(enhp[4]<10){
            drawButton("Back",150,50,100);
            if(over_button&&pressed){
                area="town";townsa="Ne"+"w Town";
            }
        }
    }
    if(area==="forest"){
        background(0, 196, 255);
        fill(0, 255, 68);
        rect(0,300,400,400);
        fill(97, 66, 66);
        if(wood===false){
            rect(120,200,20,100);
            rect(300,200,20,100);
            fill(43, 179, 22);
            ellipse(310,200,75,75);
            ellipse(130,200,75,75);
        }
        else{
            rect(120,280,20,20);
            rect(300,280,20,20);
        }
        if(mousePressed&&mouseY>180){
            wood=true;
        }
        drawButton("Back",10,10,75);
        if(over_button&&pressed){
            area="town";
        }
    }
    if(area==="market"){
        background(0, 196, 255);
        fill(0, 255, 68);
        rect(0,300,400,150);
        fill(0);
        text("Gold: "+gold,122,72);
        drawButton("Back",10,10,75);
        if(over_button&&pressed){
            area="town";
        }
        drawButton("Sell wood",10,50,100);
        if(over_button&&pressed&&wood){
            gold+=10;
            wood=false;
        }
        if(sword===false){
            drawButton("Buy a better sword for 100 gold",10,90,259);
            if(over_button&&pressed&&gold>99){
                gold-=100;
                sword=true;
            }
        }
    }
    if(area==="bakery"){
        background(0, 196, 255);
        fill(0, 255, 68);
        rect(0,300,400,150);
        drawButton("Back",10,10,75);
        if(over_button&&pressed){
            area="town";
        }
        drawButton("Buy Bread for 5 gold",100,200,200);
        text("Current amount of bread: "+bread,100,251);
        if(over_button&&pressed&&gold>4){
            bread++;
            gold-=5;
        }
    }
    if(area==="credits"){
        background(0, 196, 255);
        fill(0, 255, 68);
        rect(0,300,400,150);
        drawButton("Back",10,10,75);
        if(over_button&&pressed){
            area="town";
        }
        text("Ari(Aragorn),\ntimothy.smith\nThis game is dedicated to my friends\nHarrison and MilkyWay.",50,200);
    }
    if(area==="towns"){
        background(0, 196, 255);
        fill(0, 255, 68);
        rect(0,300,400,150);
        drawButton("Back",10,10,75);
        if(over_button&&pressed){
            area="town";
        }
        drawButton("Visit the forest of Carn",10,45,189);
        if(over_button&&pressed){
            area="carn";
        }
    }
    if(area==="inventory"){
        background(102, 74, 74);
        drawButton("Back",10,10,75);
        if(over_button&&pressed){
            area="town";
        }
        text("Supplies:\n"+gold+" gold\n"+bread+" bread\nHP: "+hp+"%",200,200);
        drawButton("Eat Bread",200,285,85);
        if(over_button&&pressed&&bread>0){
            hp+=5;
            bread--;
        }
        translate(0,20);
    fill(255, 173, 51);
    rect(167,206,31,17,5);
    fill(219, 144, 59);
    arc(182,206,25,7,6,176);
    fill(150);
    ellipse(189,195,15,15);
    resetMatrix();
    if(sword===true){
        fill(0);
        text("\n\n\n\nSword",200,200);
    }
    }
    if(area==="carn"){
        background(0, 196, 255);
        fill(0, 255, 68);
        rect(0,300,400,150);
        drawButton("Back",5,5,59,100);
        if(over_button&&pressed){
            area="town";
        }
    }
    pressed=false;
};


/////////////////////////////////////////////////////// End void draw ////////////////////////////////





void drawBattle() {
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
    if(keyPressed&&keyCode===DOWN&&pswordRotate===20){
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
    if(keyPressed&&keyCode===RIGHT){
        playerX+=5;
        pfacingLeft=false;
        plegsmoving=true;
    }
    if(keyPressed&&keyCode===LEFT){
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

////////////////////////////////////////////////////////////////
