// varial 
let nome = 'jose'
//rei
let nomes = ['rangel', 'pedro']

console.log(nome)
console.log(nomes)
console.log(nomes[0])
console.log(nomes[1])

// objetos 
let personagens = {
    nome: 'rafael',
    idade: 35,
    pais: 'brasil'
}
console.log(personagens)//vai acessar todos

console.log(personagens.nome)
console.log(personagens.idade)
console.log(personagens.pais)
console.log(`o ${personagens.nome} tem uma idade de ${personagens.idade} e mora no ${personagens.pais}`)

let pessoas ={
    nom: 'jose',
    idad: 25,
    pas: 'brasil',
    olhos:['predo','vermelhor'],
    caracteristica:{
        forca: 20,
        magia: 5,
        stamina: 12
    }
}

console.log(pessoas.caracteristica)
console.log(pessoas.caracteriastica.forca)
console.log(`no ${pessoas.pas} uma pessoa com o nome ${pessoas.mon} de idade  ${pessoas.idad} de olhos ${pessoas.olhos[0]} mais quando ficar nersovo os olhos fica  ${pessoas.olhos[1]} tem uma força ${pepessoas.caracteriastica.forca}`)