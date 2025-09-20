// ordem de funlçao.

// deiaxar em ordem afabeitica
/*

let frutas =['maça', 'uva','laranja','banana'];

frutas.sort();

console.log(frutas);

// invertendo

frutas.sort();
frutas.reverse();
 // dessa maneira vai fazer a inverção das frutas, como ta em onte, de a ate z, agora vai ficar do z ate a.
console.log(frutas);
*/
// outra maneira

let cars =[
    {brand: 'fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

cars.sort((a,b)=>{
    if (a.year > b.year){
        return 1;
    }else if (a.year < b.year){
        return -1;
    }else {
        return 0;
    }
});

console.log(cars);

// da para fazer simplificado...
/*cars.sort((a,b)=> a.year - b.year);

console.log(cars);*/