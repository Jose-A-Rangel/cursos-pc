var nome =prompt("Poderia me dizer o meu nome")
alert("Ola Sr," + nome)

var nasceu = parseFloat(prompt("poderi me dizer o ano que nasceu?"))
var ano = parseFloat(prompt("Poderia me dizer que anor que estamos"))

idade = ano - nasceu

if (idade >= 70){
    console.log("não precisa paragar passagem")
    alert("O Sr "+ nome + " tem passagem livre.")
    console.log("sua idade é "+ idade)

} else if (idade >= 18 && idade <= 50){
    console.log("Tem que pagar passagem normal")
    console.log("sua idade é "+ idade)
}
else{
    console.log("sua idade é "+ idade)
    console.log("aina é adolesente")
     var escola = prompt("Nome da escola")
     var prof =  prompt("Nome do Professo")  

     var nota01 = parseFloat(prompt("valor da primeira nota"))
     var nota02 = parseFloat(prompt("valor da segunda nota"))

     soma = (nota01 + nota02) / 2 

     var conceito = ""

     if(soma>=8){
        conceito= "Otima nota"       
        } else if (soma= 6.5){
            conceito = "Boa nota, porem ainda da pr melhora"
        }
        else{
            conceito= "regular"
        }

        console.log(soma)

        switch(conceito){
            case "Otima nota":
            console.log("parabens, vc é otimo aluno");
            break;

            case "Boa nota, porem ainda da pr melhora":
                console.log("Boa Nota, porem ainda precisa melhora um pouco.");
            break;

            case "regular":
            console.log("tem que melhora muito ainda");
            break;
            default:
                console.log("Ainda nao foi dessa vez, meu amigo, tente da proxima vez.")
            


            
        }




}

idade >18? console.log("pode beber"): console.log("não pode beber")

prompt("vamos vazer uma tabuada ?")


var nq = parseFloat(prompt("me fale um numero"))



for(var vez =0; vez <= 10; vez++){
   vezes = vez*nq
   
   console.log( nq  + " X " +vez+ " = " + vezes )
   
}
console.log("A tabuada do numero " + nq)






