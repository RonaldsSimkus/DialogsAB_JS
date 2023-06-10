var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var color = "green";

function drawBall(contact) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  color = contact === true ? (color === "green" ? "pink" : "green") : color;
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function draw() {
  var contact = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    contact = true;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
    contact = true;
  }
  drawBall(contact);

  x += dx;
  y += dy;
}

setInterval(draw, 10);
