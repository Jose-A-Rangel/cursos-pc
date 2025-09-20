
console.log($("#lista1").text())
// o text vai imprimir pr mim somente o texto que esta dentro do html, vai mostra o que ta mais parecido no que aparece na tela.
console.log($("#lista1").html())
// ja aqui vai imprimir td que esta dentro da tag ul.

console.log($("#novo").val())

console.log($("#novo").attr("name"))





console.log($("[key =3]").remove())//assim vai remover o item 3 das duas lista.

$("#lista1").find("[key =2]").remove()// assim vc conseguir remover so mente um item das duas listas.

