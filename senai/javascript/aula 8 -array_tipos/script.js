//exemplo 1 : declarando e inicializando um array vazio
console.log('\n-Exemplo 1 : Array vazio');
let meuArrayVazio = []
console.log(meuArrayVazio)
// exempo 2 : declarando arrays co elementos
console.log('\n-Exemplo 2 : arrys com elementos');
let frutas = ['Maçã','Banana','laranja','Uva'];
let numeros = [10, 20, 30, 40, 50];
let misto = ['texto', 123, true, null];
console.log('frutos', frutas);
console.log('números', numeros);
console.log('misto', misto);
//exemplo 3: acessando elementos de um arrray
console.log('n- exemplos3: acessando elementos por índice');
console.log('primeira frutas:', frutas[0]);
console.log('terceira número:', numeros[2]);
//exemplo 4: modificando elementos de um array
console.log('\n-exemplo 4 : modificando elementos');
frutas[1] = 'Pera';
console.log('Frutas modificadas', frutas)
 //exemplo 5: tamanho do array
 console.log('\n-exemplo 5: tamanho dos arrays');
 console.log('tamanho do array de frutas:', frutas.length);
 console.log('tamanho dos array de números',numeros.length);
 
 //exemplo 6; adicionando elementos ao final (push)
 console.log('\nexemplo 6: adicionado elementos com push');
 frutas.push('manga');
 console.log('frutas após push:', frutas);