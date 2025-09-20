$("#lista2").remove()// agora nao tem mais lista
$("#lista3").empty()// aqui o que foi apagado foi os filho dela, pode ir na parte de especificação.
$("li").remove(".item3,.item5")// da pr remover pela a class

$("#lista1").find("[key =1]").remove()
$("#lista1").find("[key =2],[key =3]").remove()// remover pelo o key, que foi encinado na aula 6.