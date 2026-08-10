let pessoa = {
    nome: 'Mateus',
    sobrenome: 'Sobrenome Teste',
    empresa: 'Empresa Teste',
    cargo: 'Programador FullStack'
};

console.log(pessoa.nome);
console.log(pessoa.cargo);

let nome = 'Nome Maria';

const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

console.log(`Nome da pessoa: ${nomePessoa}`);
console.log(sobrenome);

console.log(cargo);
console.log(empresa);

// ======================

// Desconstruir um Array

// ======================

let nomes = ['Mateus', 'Maria', 'João', 'Lucas'];

let {0:mateus, 2:joao} = nomes;

console.log(mateus);
console.log(joao);

let [primeiroNome, segundoNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome);
