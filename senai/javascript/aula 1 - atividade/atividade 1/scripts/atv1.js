var numeroCliente = prompt("Digite o número do cliente:");
var valor1 = parseFloat(prompt("Digite o valor da primeira compra:"));
var valor2 = parseFloat(prompt("Digite o valor da segunda compra:"));
var valor3 = parseFloat(prompt("Digite o valor da terceira compra:"));
var valorTotal = valor1 + valor2 + valor3;
var dividido = valorTotal / 3;

alert("O número do cliente é: " + numeroCliente);
alert("O valor total das compras é: " + valorTotal.toFixed(2));
alert("O valor médio das compras é: " + dividido.toFixed(2));