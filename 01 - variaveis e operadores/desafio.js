/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o preço do Litro do combustível: ', (resposta) => {
    const preco_combustivel = parseFloat(resposta);
    rl.question('Digite o gasto médio de Combustível por Km do carro: ', (resposta) => {
        const gasto_medio_combustivel_KM = parseFloat(resposta);
        rl.question('Digite a distância da viagem: ', (resposta) => {
            const distancia_viagem = parseFloat(resposta);

            console.log('O gasto total de gasolina na viagem é: '+ (distancia_viagem/gasto_medio_combustivel_KM)*preco_combustivel);
            
            rl.close();
        });
    });
});







