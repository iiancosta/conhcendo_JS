
const numero = 5;
const ehNumeroPar = (numero % 2) === 0;

if (!ehNumeroPar) {
    console.log('O número é impar');
} else if (ehNumeroPar) {
    console.log('O número é par')
} else {
    console.log('Número inválido');
}
