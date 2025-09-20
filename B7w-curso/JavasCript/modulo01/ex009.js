// boolian era so salvo verdadeiro ou falso.

// um if é de certa forma um boolian

// if tbm so verifica se é verdadeiro ou falso.

let ok = true; // trocar o true para falso, para ver o que acontece.

if (ok){
    console.log("Entrou no IF");
} else{
    console.log("Não entrou no if");
}

let idade = 36;

let adulto = idade >= 18 && idade < 60;

if (adulto) {
    console.log("É adulto");
} else { 
    console.log("Não é adulto")
}