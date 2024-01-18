// Classe
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compara_pessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que  ${p2.nome}.`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que  ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
    }
} 

const pessoa1 = new Pessoa('Ian Costa', 22); // Criando objeto do modelo Class Pessoa

const pessoa2 = new Pessoa;
pessoa2.nome = 'Marina Mello';
pessoa2.idade = 23;

compara_pessoas(pessoa1, pessoa2);

console.log(pessoa1)
console.log(pessoa2) //Nesse objeto por não instanciarmos o constructor, ficou faltando o Ano de Nascimento