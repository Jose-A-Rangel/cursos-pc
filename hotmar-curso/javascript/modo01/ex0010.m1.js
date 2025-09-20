



function saudaucao(){
    return "Olá Mundo!";// usado pr retornar o resultado 
}

var s = saudaucao();

console.log(s);


function saudaucao(){
    return "Olá Mundo!";
}

var s = saudaucao;// como aqui o saudaucao esta sem () o s fica como função tbm, vai apenas bastar usar S() no console.log(s()), assim se tornando tbm a função.

console.log(s());
// nesse caso o s tbm fica como uma função. 


function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2)/2;

    return media;
}

var resultado = media(6,7);

var m = media;

var resultado2 = m(2,3);

console.log(resultado);
console.log(resultado2);


// que é a mesma coisa que 

var med = function (b1, b2){
    return (b1 + b2)/2;
}

var d = med(2, 4);

console.log(d);

// função de setas =>
    var dia = (d1, d2) => {
        return (d1+ d2) / 2;
    }

    var f = dia(6,8)

    console.log(f);