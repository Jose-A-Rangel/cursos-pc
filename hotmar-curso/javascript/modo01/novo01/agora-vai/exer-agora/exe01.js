var nome = prompt("Me fale o seu nome")
alert("bom dia, Sr " + nome )

console.log("Vamos fazer alguma contas")

var nu = parseFloat(prompt("Me informe um numero"))
var nut = parseFloat(prompt("Poderia me dizer mais um numero"))

var soma = nu + nut 

console.log("Bom vimos que sabemos fazer contas, com o valor de " + nu + " mais o valor de "+ nut + " a soma vai ser " + soma + " entao vamos fazer a agora a sua idade " )

var ida = parseFloat(prompt("poderia me dizer o ano que nasceu ?"))
var idad = parseFloat(prompt("Poderia me dizer o anos que estamos?"))

var idade = idad - ida

console.log("logo a sua idade é " + idade)

console.log("Sera que vc pode beber ?"
    
)
console.log("vamos ver")
if (idade >= 35){
    console.log("pode beber a vontade")
    alert("Boa bebida")
}
else if(idade >= 18 && idade<=34){
    console.log("Pode beber, porem alguma bebidas vc tera que mostra o RG")
}
else{
    console.log("vc ainda nao pode beber, volter mais tarde quando tiver idade")
    alert("va para a sua casa!!")
}