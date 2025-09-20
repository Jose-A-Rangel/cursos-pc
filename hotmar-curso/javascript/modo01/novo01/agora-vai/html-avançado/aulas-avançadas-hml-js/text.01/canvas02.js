let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

ctx.rect(20,10,200,200)
ctx.fillStyle="blue";

ctx.lineWidth = 5;

ctx.strokeStyle ="red"

ctx.fill();
ctx.stroke();

ctx.clearRect(100,100,30,30)