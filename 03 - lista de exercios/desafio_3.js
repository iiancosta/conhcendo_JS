/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco_produto = 50;
const forma_pagamento = 'credito_parcelado';

function debito(preco){
    const desconto = preco-(preco*10/100);
    return desconto;
}

function dinheiro_pix(preco){
    const desconto = preco-(preco*15/100);
    return desconto;
}

function credito_parcelado(preco){
    const desconto = preco+(preco*10/100);
    return desconto;
}

if (forma_pagamento == 'debito') {
    console.log('O valor da compra fica: '+ debito(preco_produto) +' reais');
} else if (forma_pagamento == 'dinheiro_pix') {
    console.log('O valor da compra fica: '+ dinheiro_pix(preco_produto) +' reais');
} else if (forma_pagamento == 'credito') {
    console.log('O valor da compra fica: '+ preco_produto +' reais');
} else if (forma_pagamento == 'credito_parcelado') {
    console.log('O valor da compra fica: '+ credito_parcelado(preco_produto) +' reais');
} 

