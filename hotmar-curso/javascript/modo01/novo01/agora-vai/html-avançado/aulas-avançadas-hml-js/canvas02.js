let tela = document.getElementById("tela");

let ctx = tela.getContext("2d")

ctx.rect(20,10,200,200)
ctx.fillStyle = "blue";

ctx.lineWidth = 5;

ctx.strokeStyle = "red";

ctx.fill();
ctx.stroke();

ctx.clearRect(100,100,30,30)//fazer dentro do azul.




//ctx.fillRect(20,10,100,200);
/*
    o primeiro quanto menor o numeiro mais perto da parede
    segundo quanto menor o numero mais perto do teto.
    terceiro -> quando mais o numero mais largu ele fica
    quarto-> quanto maior o numero mais comprido ele fica.
*/

