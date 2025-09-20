function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

 
    
/*
   ul.children[0].innerHTML +="(alterado)"

   // quando é usado esse é subistituido tds, entao ele rescreve td. ele tira da menoria e depois coloca td de novo mais o novo item.

   */

   ul.children[0].append("(alterado)") // quando ele esta usado esse modo, ele realmente esta adicionado o novo item na memoria.
   //ele nao tira tds pr colocar td de novo e mais o novo. com o append ele sinplesmente só adiciona o arquivo novo.

   // o append [ele so funciona para texto.]


   // forma correta de fazer.

   let newLi = document.createElement("li");
   newLi.innerText = "item adicionado";
/*
   ul.appendChild(newLi);// adiciona no conteudo final.
    ul.append(newLi); // mais simplificado, adiciona no final tbm

    */

   ul.prepend(newLi);// adiciona no inicio do conteudo.

   // aqui ele ja faz a tag e só mente adiciona.
}