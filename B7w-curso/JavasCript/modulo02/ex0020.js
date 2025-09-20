// para friutra 

let fruits =['Banana','laranja', 'Maça','Pera', 'uva'];

// friutra frutas maiores de 4 letras.
/*
let bigFruits = fruits.filter((item) =>{
    if (item.length > 4){
        return true;
    }else{
        return false;
    }
})
    **/

// tem como fazer simplificado.

let bigFruits = fruits.filter((item) =>{
    return item.length > 4
}) // forma simplificada do dicima

console.log(bigFruits);


// 
/*
let ok = fruits.every((value)=>{
    return value.length > 3;
});

if (ok){
    console.log('todos são maiores que 3');
} else{
    console.log('não são todos maior que 3');

}
/*
every (ele vai satisfazer todas as condicoes  )
*/



let ok = fruits.some((value)=>{
    return value.length > 3;
});

if (ok){
    console.log('todos são maiores que 3');
} else{
    console.log('não são todos maior que 3');

}

// some, quando um so precisa satisfazer.

if ( fruits.includes('uva')) {
    console.log('tem uva sim!');
} else {
    console.log('não tem uva...');
}

