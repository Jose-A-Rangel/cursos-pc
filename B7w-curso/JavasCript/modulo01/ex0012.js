let profession = "atleta";

console.log("profissão: " + profession);

switch (profession){
    case 'fiscal': // vai alanizar
        console.log('Sua camisa sera VERDE');
        break;// para ele parar e nao ir para as outras condicionas
    case 'bombeiro':
        console.log('Sua camisa será VERMELHA');
        break;
    case 'policial':
        console.log('Sua camisa sera AZUL');        
        break;
    default:// cinducional padrao
        console.log('Sua camisa sera PRETA');
        break;            
}
// switch