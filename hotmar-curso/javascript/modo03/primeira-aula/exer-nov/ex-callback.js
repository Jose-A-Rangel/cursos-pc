/*
function cumprimentar(nome,Callback){
    console.log(" olá" + nome);
    Callback();
}

function despedida(){
    console.log(" Ate mais!");
}
//chama
cumprimentar(" maria",despedida)

*/
// quando chamou cumprimeiro, colocando maria, ja chamou o ola e assim que colocou o despedido veio o ate mais.


function mostrarMensagem(callback) {
  setTimeout(() => {
    console.log("Essa mensagem demorou 2 segundos.");
    callback();
  }, 2000);
}

function finalizar() {
  console.log("Fim da execução.");
}

mostrarMensagem(finalizar);

// foi Empreço primeiro o mostrar pq ele que esta chamando.




function operacaoMatematica(a, b, callback) {
  return callback(a, b);
}

function somar(x, y) {
  return x + y;
}

function multiplicar(x, y) {
  return x * y;
}

// Testes
console.log(operacaoMatematica(5, 3, somar));       // ?
console.log(operacaoMatematica(5, 3, multiplicar)); // ?
// 





function repetirVezes(vezes, callback) {
  for (let i = 0; i < vezes; i++) {
    callback(i);
  }
}

repetirVezes(3, function(i) {
  console.log("Execução número: " + i);
});




