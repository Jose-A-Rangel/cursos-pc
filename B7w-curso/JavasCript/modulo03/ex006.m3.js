function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newUl= document.createElement('ul');

    for (let i = 0; i < 5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = "item add" + (i + 1);
        newUl.append(newLi);
    }

    ul.after(newUl);

/*
    const newButton = document.createElement('button');
    newButton.innerHTML = "botão"

  //  ul.before(newButton);
   // ul.after(newButton);
*/
}

// coisa au redor do elemento.


// after = depois
// before = antes