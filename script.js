

// Spread Operator

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];
console.log(numeros);

let pessoa = {
    nome: 'Mateus',
    idade: 47,
    cargo: 'RH'
}

let novaPessoa = {
    ...pessoa,
    status: 'ATIVO',
    cidade: 'Campo Grande / MS',
    telefone: '678517519'
}

console.log(novaPessoa);

function novoUsuario(info) {
   let data = {
    ...info,
    status: 'ATIVO',
    iniciando: '21/02/2025',
    codigo: '1231234'
   }

   console.log(data)
}

novoUsuario({ nome: 'Jorge', sobrenome: 'Silva', cargo: 'DEV' })