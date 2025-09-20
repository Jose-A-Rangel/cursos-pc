//manipular elementos 1

 /*function clicou(){
    const teste = document.querySelector('#teste');
    console.log(teste.children);
}*/

// children (vai mostra no console uma rei de elemento, vai mostra os filho imediatos. no caso só mente <ul></ul>, as tag <li> nao vai mostra.  )


/*function clicou(){
    const teste = document.querySelector('#teste');
    console.log(teste.children[0].children);
}*/

// nesse caso vai mostra o <li>, pq vc ta considerado o <ul> como pai, e o filho imediato se torna o <li>

// children  é usado pr saber o que tem, quando se quer pega 

function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul')

   //[quando é colocado o console.log na tag innerHTML, ele vai mostra todo que tem na tag, mesmo se for testo ou tag.] console.log(ul.innerHTML)

   ul.innerHTML = ul.innerHTML + "<li> item alterado</li>";

   // com isso vc tbm pode fazer auteração do itens

   // da pr fazer com quitenação.
}
