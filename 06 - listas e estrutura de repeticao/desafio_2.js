// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const num_list = [];
for (let i = 0; i < 1000; i++) {
    num_list.push(i);
}
console.log(num_list);

for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0){
        console.log(num_list[i]);
    }
}