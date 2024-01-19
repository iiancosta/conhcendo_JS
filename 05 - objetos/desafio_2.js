/* 
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcula_IMC () {
        return this.peso / (this.altura * this.altura);
    }

    classifica_IMC () {
        // const imc = voluntario.calcula_IMC();
        const imc = this.calcula_IMC();

        if (imc < 18.5) {
            return 'falta do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'peso normal';
        } else if(imc >= 25 && imc < 30) {
            return 'excesso de peso';
        } else if(imc >= 30 && imc < 40) {
            return 'obesidade';
        } else if(imc >= 40) {
            return 'obesidade grave';
        }
    }
}

const pessoa1 = new Pessoa('Ian', 65, 1.65);

const voluntario = pessoa1; 

console.log(`${voluntario.nome} tem ${voluntario.calcula_IMC().toFixed(2)} como valor do IMC. E está classificado com: ${voluntario.classifica_IMC()}`);