// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o preço do Litro da gasolina: ', (resposta) => {
    const preco_gasolina = parseFloat(resposta);
    rl.question('Digite o preço do Litro do Etanol: ', (resposta) => {
        const preco_etanol = parseFloat(resposta);
        rl.question('Digite o gasto médio de Combustível por Km do carro: ', (resposta) => {
            const gasto_medio_combustivel_KM = parseFloat(resposta);
            rl.question('Digite a distância da viagem: ', (resposta) => {
                const distancia_viagem = parseFloat(resposta);
                rl.question('Gasolina (1) ou Etanol (2)? ', (resposta) => {
                    const escolha_combustivel = parseInt(resposta);
                    
                    if (escolha_combustivel == 1) {
                        console.log('O gasto total de gasolina na viagem é: '+ (distancia_viagem/gasto_medio_combustivel_KM)*preco_gasolina);
                    } else if (escolha_combustivel == 2) {
                        console.log('O gasto total de Etanol na viagem é: '+ (distancia_viagem/gasto_medio_combustivel_KM)*preco_etanol);
                    } else {
                        console.log('Valor incorreto!');
                    }
                    
                
                    rl.close();
                });
            });
        });
    });
});






