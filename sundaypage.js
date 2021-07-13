// Array: Isso serve como indice para buscar algum conteúdo/Informação. Tudo o que tem no menu está no array.
let menu = ['produtos','mercado', 'alta', 'investimentos', 'bancos', 'parcerias', 'opções', 'cartão'];
console.log(menu[1]);
console.log(menu[2]);
console.log(menu[3]);
console.log(menu[4]);
console.log(menu[5]);
console.log(menu[6]);
console.log(menu[7]);
console.log(menu[8]);

// Loop Javascript quando for rodar un número de vezes on N é o tamanho do array

for(let i=0; i < menu.length; i ++){
    console.log(menu[i]);
}


let pao = 'Pao Quente';
let frio = 'Pao Frio';

if ( pao === 'Pao Quente' ){
    console.log('pode comprar');
}else if (frio == 'Pao Frio'){
    console.log('Volte Mais Tarde');
}
