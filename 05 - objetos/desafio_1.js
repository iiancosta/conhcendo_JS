/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
    modelo;
    marca;
    cor;
    combustivelPorKm;
    
    constructor (modelo, marca, cor, combustivelPorKm) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }
    
    gasto_percurso (preco, distanciaKm) {
        return distanciaKm/this.combustivelPorKm*preco
    }
}

const carro1 = new Carro('HB20', 'chevrolet', 'branca', 12);
const carro2 = new Carro('Onix', 'chevrolet', 'branca', 8);
const carro3 = new Carro('Gol', 'Volkswagen', 'branca', 15);

const preco_combustivel = 5.5;
const distancia_viagem = 100;
const carro_viajante = carro3;
const gasto_percurso = carro_viajante.gasto_percurso(preco_combustivel, distancia_viagem);

console.log(`O gasto de combustível da viagem de ${distancia_viagem}Km no ${carro_viajante.modelo} é de ${gasto_percurso.toFixed(2)} reais!`);













