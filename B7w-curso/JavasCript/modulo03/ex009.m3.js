function clicou() {
    const button = document.querySelector('button');

    console.log(button.classList);

    //isso mostra a lsita de classe que vai ter (classList)

    //para adicionar 

    //button.classList.add('verde');

    // se quiser remover.

   // button.classList.remove('verde');


   if (button.classList.contains('azul')){
    button.classList.remove('azul');
    button.classList.add('verde');
   }else{
    button.classList.add('azul');
    button.classList.remove('verde');
   }




}