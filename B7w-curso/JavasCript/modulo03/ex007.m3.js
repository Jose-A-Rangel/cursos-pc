function clicou(){

    const input = document.querySelector('input');
    const botao = document.querySelector('botao');


   // console.log(input.getAttribute('placeholder'));

   // para ver se existe ou nao.

//    if (input.hasAttribute('placeholder')){
//     console.log('tem placeholder SIM');
//    }else {
//     console.log('Não tem placeholder...')
//    }


// fazer a troca do placeholder [setAttribute (ela faz a troca)]

if (input.getAttribute('type') === 'text'){
    input.setAttribute('type','password');
    botao.innerHTML = "Mostra senha"
}else{
    input.setAttribute('type', 'text' )
    botao.innerHTML = "ocultar senha"
}

    //1:27



}

// o que é um atiputos.

// type , name, class, placeholder

// o getAttribute com ele vai conseguir pegar os atributos.



// hasAttribute usado para saber se tem atributos sim ou nao.

// // (achondo o atributo.)[if (input.hasAttribute('placeholder')){
//     console.log('tem placeholder SIM');
// }else {
//  console.log('Não tem placeholder...')
// }
//  ]