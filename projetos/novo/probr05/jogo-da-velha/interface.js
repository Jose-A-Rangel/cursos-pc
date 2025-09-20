document.addEventListener('DOMContentLoaded',()=>{
   

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})


function handleClick(event){

    
    
    let square = event.target;
    let postion = square.id;

    
    if( handleMode(postion)){        
        

        setTimeout(()=>{
        alert("O jogo acabou- o vencedor foi "+ playerTime);    
        },10);

    };
    updateSquares(postion);
    


}

function updateSquares(postion){
    let square = document.getElementById(postion.toString());
     let symbol = board[postion];
      square.innerHTML = `<div class='${symbol}'></div>`
    }


//12:35


