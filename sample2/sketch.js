
let hairColor = ["#000000"];
let eyeSize = 15;

let eyeOffsetX = 0;
let eyeOffsetY = 0;


function setup(){
  createCanvas(500,500);
  
}



//________________________________________________________________________________________\\



function draw(){
  background(200);
  
  //얼굴(그림자)
  fill("#FFD0AF");
  noStroke();
  
  triangle(113,181,113,243,157,171);
  
  triangle(144,257,113,243,129,275);
  
  triangle(144,257,194,253,157,171);
  
  triangle(269,168,194,253,300,168);
  
  triangle(254,289,288,270,300,168);
  
  triangle(306,192,288,270,300,168);
  
  triangle(116,160,157,171,300,168);
  
  triangle(129,275,194,253,156,284);
  
  triangle(116,160,214,116,300,168);
  
  triangle(224,90,214,116,300,168);
  
  triangle(156,284,144,294,169,314);
  
  triangle(169,314,156,284,257,288);
  
  triangle(251,288,290,341,235,342);
 
  //________________________________________________________________________________________\\
  
  //얼굴(중립)
  noFill("#FFD0AF");
  fill("#FFDAB9");
  
  
  triangle(144,257,113,243,157,171);
  
  triangle(113,181,116,160,157,171);
  
  triangle(269,168,194,253,157,171);
  
  triangle(129,275,157,265,156,284);
  
  triangle(129,275,144,294,156,284);
  
  triangle(156,284,194,253,254,289);
  
  triangle(289,269,250,289,282,291);
  
  triangle(168,346,253,288,235,342);
  
  triangle(293,264,281,292,286,320);
  
  
  

  
  
  //________________________________________________________________________________________\\
  
  //얼굴(빛)
  noFill("#FFDAB9");
  fill('#FFDBC1');
  
  triangle(254,289,194,253,300,168);//
  
  //________________________________________________________________________________________\\
  
  //인중 및 진한 그림자.
  noFill('#FFDBC1');
  fill("#FFC091");
  
  triangle(129,275,194,253,135,250);
  
  triangle(128,116,224,90,150,168);
  
  triangle(224,90,214,116,174,135);
  
  triangle(224,90,175,55,110,131);
  
  triangle(298,227,327,216,285,284);
  
  triangle(169,313,254,288,169,348);
  
  triangle(251,288,290,341,281,291);
  
  //________________________________________________________________________________________\\
  
  //그림자
  noFill("#FFDAB9");
  fill("#000000");
  
  triangle(144,257,142,238,157,171);
  
  triangle(144,257,136,250,143,242);
  
  triangle(153,251,161,251,156,255);
  
  triangle(169,313,251,292,253,289);
  
  
  stroke("#000000");
  
  strokeWeight("2");
  
  line(143,255,149,261);
  line(251,291,290,266);
  //________________________________________________________________________________________\\
  
  //눈알
  
  noFill();
  fill("#FFFFFF");
  noStroke();
  ellipse(226,177,eyeSize + 45 ,eyeSize +2);
  ellipse(135,177,eyeSize + 11,eyeSize -2);

  let leftEyeCenterX = 137;
  let leftEyeCenterY = 179;
  let rightEyeCenterX = 229;
  let rightEyeCenterY = 179;

  let eyeMovementRange = 3;


  let leftDX = mouseX - leftEyeCenterX;
  
  let leftDY = mouseY - leftEyeCenterY;
  
  let leftMag = sqrt(leftDX * leftDX + leftDY * leftDY);
  
  leftDX = (leftDX / leftMag) * eyeMovementRange;
  
  leftDY = (leftDY / leftMag) * eyeMovementRange;

  let rightDX = mouseX - rightEyeCenterX;
  
  let rightDY = mouseY - rightEyeCenterY;
  
  let rightMag = sqrt(rightDX * rightDX + rightDY * rightDY);
  
  rightDX = (rightDX / rightMag) * eyeMovementRange;
  rightDY = (rightDY / rightMag) * eyeMovementRange;


  fill(hairColor);
  ellipse(rightEyeCenterX + rightDX, rightEyeCenterY + rightDY, eyeSize, eyeSize);
  ellipse(leftEyeCenterX + leftDX, leftEyeCenterY + leftDY, eyeSize - 5, eyeSize - 5);

  fill("#FFFFFF");
  ellipse(rightEyeCenterX + rightDX + 3, rightEyeCenterY + rightDY - 2, 5, 5);
  ellipse(leftEyeCenterX + leftDX + 1, leftEyeCenterY + leftDY - 1, 3, 3);

  
  //눈썹
  stroke("#000000");
  strokeWeight("1.84");
  line(130,165,145,165);
  line(203,169,249,169);
  
  //________________________________________________________________________________________\\
  
  //머리
  
  noStroke();
  fill(hairColor);
 
  triangle(108,160,124,165,140,136);
  
  triangle(108,160,116,159,114,169);
  
  triangle(108,178,116,159,142,149);
  
  triangle(119,175,166,123,136,117);
  
  triangle(133,164,173,124,156,108);
  
  triangle(146,160,172,108,138,108);
  
  triangle(155,159,149,104,183,109);
  
  triangle(108,160,105,133,155,90);
  
  triangle(108,160,136,140,140,104);
  
  triangle(178,110,169,68,128,119);
  
  triangle(105,132,122,85,168,68);
  
  triangle(122,85,98,155,168,67);
  
  triangle(166,67,137,106,179,65);
  
  triangle(141,65,130,92,175,54);
  
  triangle(175,54,142,79,191,58);
  
  triangle(123,115,96,172,171,88);
  
  triangle(176,54,209,108,233,82);
  
  triangle(209,108,222,143,233,82);
  
  triangle(240,163,222,143,233,82);
  
  triangle(263,173,222,143,233,82);
  
  triangle(270,163,222,143,233,82);
  
  triangle(194,73,225,85,209,167);
  
  triangle(180,56,254,71,276,153);
  
  triangle(299,167,276,95,180,56);
  
  triangle(286,175,226,96,247,91);
  
  triangle(140,68,164,44,215,31);
  
  triangle(153,59,215,31,253,70);
  
  triangle(214,31,314,173,303,87);
  
  triangle(165,44,214,54,224,27);
  
  triangle(289,122,297,235,314,108);
  
  triangle(224,27,286,44,249,105);
  
  triangle(224,27,201,66,267,39);
  
  triangle(286,44,343,80,228,122);
  
  triangle(343,80,353,161,258,107);
  
  triangle(353,161,309,136,299,198);
  
  triangle(343,80,364,137,353,161);
  
  triangle(364,137,351,186,349,139);
  
  triangle(352,183,349,144,306,210);
  
  
  
  //________________________________________________________________________________________\\
  
  //귀
  noFill("##000000");
  fill("#FFDBC1");
  arc(301,203,100,80,radians(300),radians(100));
  
  noFill("#FFDBC1");
  fill("#FFC091");
  arc(315,205,60,45,radians(300),radians(110));
  
  
  
  


 //________________________________________________________________________________________\\
  
  //입
  
  stroke("#000000");
  line(157,275,187,273);
  strokeWeight("0.8");
  line(168,278,174,278);
 

  
  //________________________________________________________________________________________\\
  
  //내이름
   fill("#000000");
  textSize(42); 
  textFont("Georgia");
  textAlign(CENTER, CENTER);  
  text("Seok jun hyeok", width / 2, height / 1.13); 
  
  
  

 

}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
  if (key === 'a'){
  hairColor = color(random(255), random(255), random(255)); 
  }
}