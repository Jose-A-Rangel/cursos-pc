var nota1 = 9.0;
var nota2 = 1
.0;

var media = (nota1 + nota2)/2;
var conceito = " "

if (media >= 8){
   conceito = "Otimo";
}
else if(media>=6.5) {
    conceito = "Bom";
}
else{
    conceito = "Regular";
}
console.log(media)
console.log(conceito)


switch(conceito){
    case "Otimos":
        console.log("Parabens, vc é um otimo aluno")
        break;
    case "Bom":
        console.log("vc esta quase perfeito ")
        break;
    case "Regular":
        console.log("estude mais um pouco")
        break;
    default:
        console.log("houve algum erro")
        break;


    
}