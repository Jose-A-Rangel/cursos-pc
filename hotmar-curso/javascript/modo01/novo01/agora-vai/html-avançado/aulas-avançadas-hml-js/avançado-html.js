

/*
let image = document.getElementById("like")
image.addEventListener("click", function(){
    //tem dessa forma
    /*
    image.src="/imagens/276081556_496633278593372_768369791399792641_n.jpg"
    */

    // tbm tem essa 

    //image.setAttribute("src","/imagens/276081556_496633278593372_768369791399792641_n.jpg")

    
/* })*/
// assim que clika vai fazer a troca da imagens.

let video= document.getElementById("video1");

function retroceder(){
    video.currentTime -= 15
    //usado pr pular 15 segundp ou pr traz ou pr frete
}
function avancar(){
    video.currentTime += 15
    //usado pr pular 15 segundp ou pr traz ou pr frete
}
function diminuir_vel(){
    video.playbackRate -= 0.1;
    //usando pr diminuir a velocidade do video
}
function aumenta_vel(){
    video.playbackRate += 0.1;
    //usando pr aumenta a velocidade do video
}
function play(){
      video.play();
}
function stop(){
    video.pause();
    video.currentTime = 0;
    // é colocado o currentTime = 0 -> pr volt do zero.
}
