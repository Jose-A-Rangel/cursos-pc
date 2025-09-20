let tela = document.getElementById("tela");

let ctx = tela.getContext("2d")



let circle ={
 x : 250,
 y : 250,

 raio : 100,

 inicio : 0,

fim : 0,
}


function drawCircle(c){

ctx.beginPath();// criando
ctx.rect(0,0,700,500);//criando o retangolo
ctx.fillStyle = "beige";//colocando cor
ctx.fill();


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle ="blue";
ctx.arc(c.x,c.y,c.raio,c.inicio,c.fim);



ctx.fill();
ctx.stroke();
}
setInterval(function(){
    if(circle.fim< 2*Math.PI){
        circle.fim += 0.03;
        circle.x += 0.8
    }
    drawCircle(circle)
},10)




