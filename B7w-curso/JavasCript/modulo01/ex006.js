/*
Diferencia do 
== para ===


== (quando é assim, é uma verificação não tao rigorosa)

=== (é ta sendo bem mais restrito na sua verificação)

!== (diferente)

*/

let idade = 20; /*aqui é somente um numb*/

if (idade == 20) // funciona
    {
        idade = idade + 15;
        console.log("idade adicionada com sucesso!");
        console.log(idade);
    }




    let idad = "20";/*aqui vira uma string*/

if (idad == 20) // funciona , mais nao como uma soma, e sim uma conquitanação.
    {
        idad = idad + 15;
        console.log("idade adicionada com sucesso!");
        console.log(idad);
    }



    let ida = 20;

if (ida === 20)// funciona
    {
        ida = ida + 15;
        console.log("idade adicionada com sucesso!");
        console.log(ida);
    }




    let idadee = "20";

if (idadee === 20) // nao funciona
    {
        idadee = idadee + 15;
        console.log("idade adicionada com sucesso!");
        console.log(idadee);
    }