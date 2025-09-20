
/*
let image = document.getElementById('like')
image.addEventListener("click", function(){

    image.src = "/imagens/246385524_3140873906234981_7835808733972800403_n.jpg"
})

/*
let image = document.getElementById('like')
a image é a informação de onde ta o like, e o like é o id que tbm a a informaçao da imagen, 


quando colocado-> image.addEventListener("click", function()

ta sendo assim imagem vai esecutar uma coisa que esta dentro do ("click"-> quando for ficando... vai fazer o que esta na função.)[addEventListener -> é o que diz depois de imagen] 

*/

// addEventListener ->  permite definir uma função para ser executada quando um evento específico ocorre em um elemento (nesse caso aqui vai ser assim que ele for kicado)

/*
let image = document.getElementById('like')
image.addEventListener("click", function(){

    image.setAttribute("cor","vermelhor")
    // setAttribute -> é um método utilizado em JavaScript para definir ou alterar o valor de um atributo de um elemento HTML. Se o atributo já existir, o seu valor será atualizado; caso contrário, um novo atributo será criado com o nome e valor especificados. vai conseguir acessar um atributo.

    
})

             aqui pra cima é td a prengisagem um

*/


let lista = document.getElementById("lista");

lista.dataset.num = 4;
//pode tbm fazer modificação aqui 

// conseguimos seta e consegue pega um elemento dessa maneira


let id = lista.dataset.id

console.log(id)

let num = parseInt(lista.getAttribute("data-num"));
console.log(lista.dataset.num)

let conteudo = ""

for (let i =0; i<=num; i++){
    conteudo+= "<li>" + i + "</li>";
}

lista.innerHTML = conteudo; 