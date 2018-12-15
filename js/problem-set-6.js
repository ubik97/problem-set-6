
function sayHello() {

  let ctx = document.getElementById('canvas1').getContext('2d');
  ctx.clearRect(0,0,1024,128);
  ctx.font = '48px sans-serif';
  ctx.strokeText('Hello, world!', 10, 50);

}





function drawRectangle() {

  let width = prompt("Width:");
  let height = prompt("Height:");
  let x = prompt("X Value:");
  let y = prompt("Y Value:");

  if (Number.isInteger(Number(width))==false || Number.isInteger(Number(height))==false || Number.isInteger(Number(x))==false || Number.isInteger(Number(y))==false) {
    alert("One of your inputs is not a number.")
  }
  else if (width<1) {
    alert("Your width is too small");
  }
  else if (width>1024) {
    alert("Your width is too large");
  }
  else if (height>512) {
    alert("Your height is too large");
  }
  else if (height<1) {
    alert("Your height is too small");
  }
  else if (x<5) {
    alert("Your X value is too small");
  }
  else if (y<5) {
    alert("Your Y value is too small");
  }
  else if ((Number(width) + Number(x))>1024) {
    alert("Your X value is too large");
  }
  else if ((Number(height) + Number(y))>512) {
    alert("Your Y value is too large");
  }

  let ctx = document.getElementById('canvas2').getContext('2d');
  ctx.clearRect(0,0,1024,512);
  ctx.strokeRect(x,y,width,height);
}





function drawColoredRectangle() {

  let color = prompt("Color:");
  let ctx = document.getElementById('canvas3').getContext('2d');
  ctx.clearRect(0,0,1024,512);

  if ((color!=="black" && color!=="blue" && color!=="green" && color!=="orange" && color!=="purple" && color!=="red" && color!=="yellow")) {
    alert("That color is not supported");
  } else {
  ctx.fillStyle = color;
  ctx.fillRect(10,10,100,50);
}
}





function drawTriangle() {

let arr = []
let side1 = Number(prompt("Side 1: "));
arr.push(side1);
let side2 = Number(prompt("Side 2: "));
arr.push(side2);
let side3 = Number(prompt("Side 3: "));
arr.push(side3);
let hyp = Number(Math.max(...arr));
let left = Number(Math.min(...arr));
let sum = arr.reduce((previous, current) => current += previous);
let bottom = Number(sum) - (Number(hyp)+Number(left));

console.log(hyp);
console.log(left);
console.log(bottom);

if (Number.isInteger(side1)==false || Number.isInteger(side2)==false || Number.isInteger(hyp)==false) {
  alert("One of your inputs is not a number.");
}
else if (left<1 || bottom<1 || hyp<1) {
  alert("That is not a valid right triangle");
}
else if ( ( (Math.pow(left, 2)) + (Math.pow(bottom, 2)) ) !== Math.pow(hyp, 2) ) {
  alert("That is not a valid right triangle");
}
else if (bottom>1014 || left>502) {
  alert("That is triangle too big to display in the given area.");
}
else {

  let ctx = document.getElementById('canvas4').getContext('2d');
  ctx.clearRect(0,0,1024,512);

  ctx.beginPath();
  // left-hand side
  ctx.moveTo(10, 10);
  ctx.lineTo(10, (left));
  // bottom side
  ctx.moveTo(10, (left));
  ctx.lineTo(bottom, left);
  // hypotenuse
  ctx.moveTo(10, 10);
  ctx.lineTo(bottom, left);
  ctx.closePath();
  ctx.stroke();

}

}





function drawSmileyFace() {

  let radius = Number(prompt("Enter a radius"));
  let eyes = radius*0.1;
  let mouth = radius*0.7;
  let end = Math.PI*2

  if (isNaN(radius)) {
    alert("That's not a number!");
  }
  else if (radius>250) {
    alert("That radius is too large.");
  }
  else if (radius<1) {
    alert("That radius is too small.");
  }
  else {
  let ctx = document.getElementById('canvas5').getContext('2d');
  ctx.clearRect(0,0,1024,512);
  ctx.beginPath();
  ctx.arc(radius, radius, radius, 0, end); // head
  ctx.stroke();
  ctx.beginPath()
  ctx.arc(radius, radius, mouth, 0, end/2); // mouth
  ctx.stroke();
  ctx.beginPath()
  ctx.arc(radius*1.4, radius*0.5, eyes, 0, end); // eye
  ctx.stroke();
  ctx.beginPath()
  ctx.arc(radius*0.6, radius*0.5, eyes, 0, end); // eye
  ctx.stroke();
 }
}


/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  let ctx = document.getElementById('canvas5').getContext('2d');
ctx.clearRect(0,0,1024,512);





}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  ctx.beginPath();                       //u have to use sqrt(2) to figure out all the diagonal distances bleh
  ctx.moveTo(, 300);
  ctx.lineTo(512, 10);
  ctx.lineTo(874, 300);
  ctx.closePath();
}





function drawPyramid() {

  let side = Number(prompt("Enter a side length."));
  let half = side/2;
  let side2 = 2*side;
  let side3 = 3*side;
  let side4 = 4*side;
  let side5 = 5*side;

  if (side>100) {
    alert("The pyramid will not fit on the canvas");
  }
  else if (side<1) {
    alert("That side length is too small.");
  }
  else if (isNaN(side)) {
    alert("Your input is not a number.");
  } else {
    let ctx = document.getElementById('canvas8').getContext('2d');
    ctx.clearRect(0,0,1024,512);

    ctx.strokeRect(10, 502-side, side, side);                 //row 5
    ctx.strokeRect(10+side, 502-side, side, side);
    ctx.strokeRect(10+side2, 502-side, side, side);
    ctx.strokeRect(10+side3, 502-side, side, side);
    ctx.strokeRect(10+side4,502-side, side, side);

    ctx.strokeRect(10+half, 502-side2, side, side);          //row 4
    ctx.strokeRect(10+half+side, 502-side2, side, side);
    ctx.strokeRect(10+half+side2, 502-side2, side, side);
    ctx.strokeRect(10+half+side3, 502-side2, side, side);

    ctx.strokeRect(10+side, 502-side3, side, side);         //row 3
    ctx.strokeRect(10+side2, 502-side3, side, side);
    ctx.strokeRect(10+side3, 502-side3, side, side);

    ctx.strokeRect(10+half+side, 502-side4, side, side);    //row 2
    ctx.strokeRect(10+half+side2, 502-side4, side, side);

    ctx.strokeRect(10+side2, 502-side5, side, side);        //row 1
  }
}





function drawHouse() {

  let ctx = document.getElementById('canvas9').getContext('2d');
  ctx.clearRect(0,0,1024,760);
  let hcol = prompt("What color will your house be?");
  let dcol = prompt("What color will your door be?");

  if (hcol!=="blue" && hcol!=="brown" && hcol!=="green" && hcol!=="orange" && hcol!=="purple" && hcol!=="red" && hcol!=="yellow") {
    alert("One of your colors is not supported");
  }
  else if (dcol!=="blue" && dcol!=="brown" && dcol!=="green" && dcol!=="orange" && dcol!=="purple" && dcol!=="red" && dcol!=="yellow") {
    alert("One of your colors is not supported");
  } else {

    ctx.lineWidth = 2;                        //outer rectangle
    ctx.fillStyle = hcol;
    ctx.strokeRect(150, 300, 724, 450);
    ctx.fillRect(150, 300, 724, 450);


    ctx.beginPath();                          //roof
    ctx.moveTo(150, 300);
    ctx.lineTo(512, 10);
    ctx.lineTo(874, 300);
    ctx.closePath();

    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "gray";
    ctx.fill();

    ctx.lineWidth = 2;                        //upper windows
    ctx.fillStyle = "lightblue";
    ctx.strokeRect(275, 380, 80, 80);
    ctx.fillRect(275, 380, 80, 80);

    ctx.lineWidth = 2;
    ctx.fillStyle = "lightblue";
    ctx.strokeRect(669, 380, 80, 80);
    ctx.fillRect(669, 380, 80, 80);

    ctx.lineWidth = 2;                        //lower windows
    ctx.fillStyle = "lightblue";
    ctx.strokeRect(275, 640, 80, 80);
    ctx.fillRect(275, 640, 80, 80);

    ctx.lineWidth = 2;
    ctx.fillStyle = "lightblue";
    ctx.strokeRect(669, 640, 80, 80);
    ctx.fillRect(669, 640, 80, 80);

    ctx.lineWidth = 3;                        //door
    ctx.fillStyle = dcol;
    ctx.strokeRect(462, 600, 100, 150);
    ctx.fillRect(462, 600, 100, 150);

    ctx.beginPath()                           //door knob
    ctx.lineWidth = 3;
    ctx.fillStyle = "gold";
    ctx.arc(550, 675, 6, 0, Math.PI*2);
    ctx.stroke();
    ctx.fill();
  }
}
