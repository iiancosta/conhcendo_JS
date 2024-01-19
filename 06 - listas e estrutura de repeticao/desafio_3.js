//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Ian', 'Victor', 'Joelma', 'Sara', 'Marina', 'Vanessa', 'Vladmir', 'Vagner', 'Vilma', 'Cristina']

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] == 'V') {
        console.log(nomes[i]);
    }
}