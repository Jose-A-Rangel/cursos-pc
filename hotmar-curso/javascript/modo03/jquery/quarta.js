//$(".item2").hide() -> [vai fazer o item2 sumir das duas liastas, e nao é isso que a gente quer]


//$("#lista1 > .item2").hide(); [assim deu certo, porem tem mais outra fora de fazer o mesmo]

//let liasta1 = $("#lista1");
//liasta1.find(".item2").hide(); [find-> vai procura um desendente, podendo ser um filho ou neto, ele vai procurar nao inporta a destancia de parentesco. ]

//console.log(liasta1.children());// vai ter acesso a tds os filho do elemento.

let jq =$("#lista1").slideUp(2000).slideDown(2000).fadeOut(1000);

console.log
