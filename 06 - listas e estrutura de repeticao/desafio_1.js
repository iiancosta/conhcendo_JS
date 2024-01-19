// 1) Crie um programa que dado um número imprima a sua tabuada.

function tabuada (num) {
    for (let i = 1; i < 11; i++) {
        console.log(`${i} x ${num} = ${i*num}`);
    }
}

tabuada(10)