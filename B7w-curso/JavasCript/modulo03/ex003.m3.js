// evento de click

// tem 2 formas. 

// primeira
function clicou(){
    alert("clicou no botão");
}

// segundo mudo, selecionado o elemento pelo o js.
let botão = document.querySelector('#t2');
botão.addEventListener("click", function clicouu(){
    console.log("cliccou no botão")
})

//addEventListener (ele vai fica espeando o click para pode fazer alguma coisa.)