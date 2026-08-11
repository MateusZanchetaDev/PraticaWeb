
// Find = Buscar algo na lista

let listagem = [5, 3 , 'Jose', 2, 'Mateus'];

let busca = listagem.find((item)=> {
    if(item === 'Jose') {
        return console.log('Item encontrado com sucesso');
    }
})

//console.log(busca);

// Filter = filtrar lista

let palavras = ['Mateus', 'Ana', 'Jose', 'Ricardo', 'Sujeito Programador', 'Jose'];

let resultado = palavras.filter((item) => {
    return item === 'Jose';
})

console.log(resultado);