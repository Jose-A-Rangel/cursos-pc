let tela = document.getElementById("tela");

let ctx = tela.getContext("2d")

ctx.beginPath();// quer dizer nova linha.

ctx.lineWidth = 4;// grosora
ctx.strokeStyle = "red";// cor
ctx.moveTo(10,10);//inicio da linha
ctx.lineTo(400,300);// ate o outro ponto.
ctx.stroke();//que faz o efetio aparecer.

ctx.beginPath();//outra linha
ctx.lineWidth = 7// grosora da linha
ctx.strokeStyle = "blue";
ctx.moveTo(50,10)//inicio
ctx.lineTo(300,300)//outra ponto
ctx.lineTo(200, 300)// junta com a outra linha.
ctx.closePath()//fecha o caminho.
ctx.stroke()
ctx.fillStyle = "green";// cor de dentro
ctx.fill()// mostra 
