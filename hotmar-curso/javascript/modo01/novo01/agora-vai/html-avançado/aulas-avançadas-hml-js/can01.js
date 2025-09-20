let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")

let img = new Image();

img.src= "/imagens/246385524_3140873906234981_7835808733972800403_n.jpg"

img.onload = desenharImg

function desenharImg(){

ctx.drawImage(this,20,20)
}