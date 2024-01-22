
function tabuada ( num ) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

function maior_menor ( lista ) {
    let maior = lista[0];
    let menor = lista[0];

    for (let i = 0; i < lista.length; i++) {
        if ( maior < lista[i]) {
            maior = lista[i];
        }
        if ( menor > lista[i]) {
            menor = lista[i];
        }
    }

    console.log(`O maior número: ${maior}.`);
    console.log(`O menor número: ${menor}.`);
}

function impar_par ( lista ) {

    num_par = [];
    num_impar = [];

    for ( let i = 0; i < lista.length; i++ ){
        if ( lista[i] % 2 === 0) {
            num_par.push(lista[i]);
        } else {
            num_impar.push(lista[i]);
        }
    }

    console.log(`Números Pares: ${num_par}`);
    console.log(`Números Ímpares: ${num_impar}`);

}

module.exports = { tabuada, maior_menor, impar_par }; // Exporta as funções. BASTA COLOCAR OS NOMES DELAS INTERNAMENTE