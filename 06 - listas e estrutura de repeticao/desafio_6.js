// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
// Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const notas = [2, 7, 3, 8, 10, 4];
let maior_nota = 0;
for (let i = 0; i < notas.length; i++){
    if (notas[i] > maior_nota){
        maior_nota = notas[i];
    }
};
console.log(`A maior nota é ${maior_nota}`);