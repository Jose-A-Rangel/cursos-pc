//$("h1").addClass("bg-blue")
//.addClass-> adiciona uma classe CSS(nao precisa colocar o ponto, ele ja sabe que e uma classe)
//$("h1").removeClass("bg-blue")
//.removeClass-> remove uma classe CSS

/*
adicionou uma classe e removeu


setTimeout(() => {
    $("h1").addClass("bg-blue")
}, 1000);

setTimeout(() => {
    $("h1").removeClass("bg-blue")
}, 2000);
*/

/*
setTimeout(() => {
    $("h1").toggleClass("bg-blue")
},3000)

setTimeout(() => {
    $("h1").toggleClass("bg-blue")
},2000)
// se a classe existir, ele remove, se nao existir, ele adiciona-> toggleClass.  pode ser colocado em um funçao tbm.

*/
/*
setInterval(() => {
    $("h1").toggleClass("bg-blue")
},2000)

*/
// da tbm pr modificar os elemnto do css

$("h1").toggleClass("bg-blue")

console.log($("h1").css({"background-color": "blue", "font-size": "80px"})) //pega a cor do h1




