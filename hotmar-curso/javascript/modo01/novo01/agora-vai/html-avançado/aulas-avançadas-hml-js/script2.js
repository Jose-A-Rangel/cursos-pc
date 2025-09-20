let tela = document.getElementById("tela");


let ctx = tela.getContext("2d");
/*
ctx.moveTo(0,0);// fala o inicio
ctx.lineTo(250, 250);// ate onde vai chgar
ctx.stroke();// o que forma a linha.
ctx.lineTo(500, 0);//
ctx.stroke()
*/

ctx.moveTo(0,0);// fala o inicio
ctx.lineTo(250, 250);// ate onde vai chgar
ctx.lineTo(500, 0);//
ctx.strokeStyle ="#f00"// a cor da linha
ctx.lineWidth = 5; // a grosora da linha
ctx.stroke();// o que forma a linha.



