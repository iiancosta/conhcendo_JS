// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const num_list = [];
for (let i = 10; i <= 50; i++) {
    num_list.push(i);
}
console.log(num_list);

for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0){
        console.log(num_list[i]);
    }
}

















