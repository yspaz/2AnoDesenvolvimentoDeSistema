// resposta no console
console.log("olá mundo!");

// caixas de dialogo
// alert("olá mundo!");
// prompt("qual seu nome?");
// confirm("você é estudante?");

// acessa documento,busca o elemento com id selecionado
// inner = dentro
document.getElementById("resposta").innerText = "<h1>linda tarde!</h1>"
document.getElementById("resposta").innerHTML = "<h1>linda tarde!</h1>"

// string - caractere ("Yasmin")
var nome = "Yasmin";
//  boolean - lógico (true ou false)
var ligado = true;
// number - numérico (16)
// *obs para numeros quebrados - float()
// *obs para numeros inteiros - Int()
var idade = 16;
var dinheiro = 100.50;
// array - lista , vetor
var listaCompras = []
console.log(typeof(nome)); 
console.log(typeof(ligado)); 
console.log(typeof(idade)); 
console.log(typeof(dinheiro));
console.log(typeof(listaCompras));