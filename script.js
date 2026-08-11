
// Resto Operator

function convidados(...nomes) {
    console.log('Seja bem vindo todos convidados');
    console.log(nomes);
}

convidados('Jorge', 'Carlos', 'Jose', 'Lucas')

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(`Numero gerado foi: ${numeros[numeroGerado]}`);
}

sorteador(1,3,81,5,42,531,3,642,3145);