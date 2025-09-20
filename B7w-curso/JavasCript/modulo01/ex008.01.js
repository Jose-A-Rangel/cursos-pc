/*
else -> ele vai prioriza a primera que estiver certa, mesmo que a outra estiver mais completa ele vai por ontem, assim o primeiro que tiver e estando certo ele que vai.
*/


let idade = 60;



if (idade >= 0 && idade < 4){
    console.log('voce é um Bebe.')
} else if (idade >= 4 && idade < 13){
    console.log('voce é uma criança')
 } else if (idade >= 13 && idade < 18){
    console.log('Você é um adolecente.')
}
 else if (idade < 18){
    console.log("voce é uma criança!!")
} else if (idade >= 18 && idade < 60){
    console.log("voce é uma adulto")
} else if (idade >= 60){
    console.log("voce é um idoso")
}