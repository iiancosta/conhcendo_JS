const notas = [];

notas.push(10); // incrementa valores a lista
notas.push(10);
notas.push(10);

let soma_notas = 0;
for (let i = 0; i < notas.length; i++) {
    soma_notas += notas[i];
}
const media_notas = soma_notas/notas.length
console.log(`A média de notas do aluno é: ${media_notas}`);

console.log(notas.length); // informa o tamanho da lista 
console.log(notas);
notas.shift(); // remove o primeiro item da lista
console.log(notas);
notas.pop(); // remove o último item da lista
console.log(notas);