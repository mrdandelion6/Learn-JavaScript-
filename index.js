let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

// drawing text
context.font = "50px MV Boli";
context.fillStyle = "red";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);