// quando for cria uma lsita de alguma coisa. usar o rei.

let cores = ['blue','red','gree'];
// para a criação da rei usar o []

// mostra a rei usar console.log

console.log(cores); // ele ja mostra a quantidade de item que vai ter na rei.

//quando vc quer pegar somente um item da rei, vai colocar o [] depois da cores junto com o numero, as reis são indentificadas comensando do 0. logo fica assim. 0,1,2,3,4,5...ate o infinito.

console.log(cores[1])

// pode colocar uma rei dentro de uma rei.

let nomes = [ 'Jose', 'nubia', 'kinha',['daniel','lucas']]

let list = ['blabla', nomes]

console.log(nomes[0])//jose
console.log(nomes[1])//nubia
console.log(nomes[2])//kinha
console.log(nomes[3][0])//daniel
console.log(nomes[3][1])//lucas

// vamos tenta o outro

console.log(list[0])// blabla
console.log(list[1][0])// jose
console.log(list[1][1])//nubia
console.log(list[1][2])//kinha
console.log(list[1][3])//vai mostra o que tem no item
console.log(list[1][3][0])// daniel
console.log(list[1][3][1])//lucaz

