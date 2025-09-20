let personagem = {
    nome: 'Boniehy',
    idade:90,
    pais:'brasil',
    olhos:['preto', 'vermelho'],
    caracteristicas:{
        força: 20,
        magia: 5,
        stamina: 15
    }
}
console.log(personagem.nome)

personagem.nome // assim eu acesso.

personagem.nome = 'pedro'; // se poi o igual vc difine.

console.log(personagem.nome)

personagem.caracteristicas.força +=5; // vai aumenta 5

console.log(personagem.caracteristicas.força) // teve um aumento de 
5

// adicinando.

personagem.olhos.push('verde')

console.log(personagem.olhos[0])
console.log(personagem.olhos[1])
console.log(personagem.olhos[2])


let modo ={
    no:'ola',
    ida:50,
    carros:[
        {modelo: 'fiat', cor: 'preto'},
        {modelo: 'ferrari', cor: 'vermelho'}
    ]
}

console.log(modo.carros[0].modelo)
console.log(modo.carros[0].cor)
console.log(modo.carros[1].modelo)
console.log(modo.carros[1].cor)


