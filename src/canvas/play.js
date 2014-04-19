var ctx = document.getElementById("canvas").getContext("2d")

var render = function() {
  //ctx.globalAlpha = 1.0

  var red = 255 // Math.floor(Math.random() * 256)
  var green = 191 // Math.floor(Math.random() * 256)
  var blue = 0 // Math.floor(Math.random() * 256)
  
  var alpha = 0.01

  var theta = Math.random() * 2 * Math.PI
  var rho = Math.random() * 800 + 1000 
  var x = Math.cos(theta) * rho + 200
  var y = Math.sin(theta) * rho + 200

  ctx.beginPath()
  ctx.arc(x,y,1000,0,2*Math.PI)

  ctx.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")"
  ctx.fill()
  
   console.log("Frame")

/*
  var parity = Math.floor(Math.random() * 2)

  var x = 0
  var y = 0

  var corner = Math.floor(Math.random() * 4)
  if (corner === 0) {
    x = 0
    y = 0
  } else if (corner === 1) {
    x = 400
    y = 0 
  } else if (corner === 2) {
    x = 0
    y = 400
  } else {
    x = 400
    y = 400
  }

  var xdir = 1
  if (x === 400) {
    xdir = -1
  }

  var ydir = 1
  if (y === 400) {
    ydir = -1
  }

  var xdelta = Math.random() * Math.random() * 400 * xdir
  var ydelta = Math.random() * Math.random() * 400 * ydir

  var otherx = x + xdelta
  var othery = y + ydelta


  if (parity === 0) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, othery)
    ctx.lineTo(otherx, y)
    ctx.closePath()
  } else {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(otherx, y)
    ctx.lineTo(x, othery)
    ctx.closePath()
  }
  */

}

setInterval(render, 1000 / 60)
