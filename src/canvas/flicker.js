var SIZE = 400
var BIG = 10000
var FPS = 60
var CYCLE = 2
var EPSILON = 5 // cc tom7

var alpha = 0.01

var negative =  "rgba(0, 0, 0, " + alpha + ")"

var iteration = 0

var ctx = document.getElementById("canvas").getContext("2d")
ctx.translate(200, 200)

ctx.beginPath()
ctx.arc(0, 0, SIZE / 2 - 5, 0, 2 * Math.PI)
ctx.clip()

var render = function() {
  var theta = Math.random() * 2 * Math.PI
  var rho = Math.random() * SIZE + BIG
  var x = Math.cos(theta) * rho
  var y = Math.sin(theta) * rho

  var red =  Math.floor(Math.random() * 256) // 255
  var green = Math.floor(Math.random() * 256) // 191
  var blue = Math.floor(Math.random() * 256) // 0
  var positive =  "rgba(" + red + "," + green + "," + blue + "," + alpha + ")"

  ctx.beginPath()
  ctx.arc(x, y, BIG + SIZE, 0, 2*Math.PI)

  ctx.fillStyle = (iteration <= CYCLE / 2) ? positive : negative
  ctx.fill()

  var mask = ctx.createRadialGradient(0, 0, 3 * SIZE / 4, 0, 0, SIZE / 2 + EPSILON);
  mask.addColorStop(0, "rgba(0, 0, 0, 0.5)");
  mask.addColorStop(1, "rgba(0, 0, 0, 0.5)");

  ctx.fillStyle = mask
  //ctx.fillRect(-SIZE / 2, -SIZE / 2, SIZE / 2, SIZE / 2)

  iteration = (iteration + 1) % CYCLE
}

setInterval(render, 1000 / FPS)
