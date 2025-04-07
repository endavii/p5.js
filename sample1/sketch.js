let x, y;

let bgColor = "#FFFFFF";



function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  background('#000000');
  fill("bgColor");
  ellipse(x,y,100,100);
  
}

function keyPressed(){
   if (keyCode === LEFT_ARROW) {
    x -= 50; 
    bgColor = '#FF0000';
  } else if (keyCode === RIGHT_ARROW) {
    x += 50; 
    bgColor = '#0000CD';
  } else if (keyCode === UP_ARROW) {
    y -= 50; 
  } else if (keyCode === DOWN_ARROW) {
    y += 50; 
  }
}

