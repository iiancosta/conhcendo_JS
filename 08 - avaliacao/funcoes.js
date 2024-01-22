
function status_aluno ( media ) {
    if (media < 5) {
        console.log('Reprovado');
    } else if (media >= 5 && media < 7) {
        console.log('Em recuperação');
    } else if (media >= 7) {
        console.log('Aprovado');
    }
}

function pares_impares ( lista ) {

    maior_par = lista[0];
    menor_impar = lista[0];

    for ( let i = 0; i < lista.length; i++ ) {
        if (lista[i] % 2 === 0 && maior_par < lista[i]) {
            maior_par = lista[i];
        } else if (lista[i] % 2 != 1 && menor_impar > lista[i]) {
            menor_impar = lista[i];
        }
    }

    console.log(`Maior par: ${maior_par}`);
    console.log(`Menor impar: ${menor_impar}`);
}

function pagamento ( salario_bruto, beneficios ) {
    let imposto = 0;
    if (salario_bruto <= 1100) {
        imposto = 0.05;
    } else if (salario_bruto > 1100 && salario_bruto < 2500) {
        imposto = 0.1;
    } else if (salario_bruto <= 2500) {
        imposto = 0.15;
    }

    const salario = salario_bruto-(salario_bruto*imposto)+beneficios
    console.log(`Salário líquido: ${salario}`);
}

module.exports = { status_aluno, pares_impares, pagamento };