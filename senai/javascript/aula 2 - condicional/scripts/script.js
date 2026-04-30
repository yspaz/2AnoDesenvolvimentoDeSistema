var nome = "Kitana"; 
var vida = 3;
var moeda = 0;
var dano = 1;

function mostrarPersonagem(){
    
    document.getElementById("ficha").innerHTML = `
    <img src="images/KITANAMORTA.gif" id="icone" alt="">
     <h1>🪭 ${nome} </h1>
     <p>❤️ ${vida} </p>
     <p>🪙 ${moeda} </p>
     <p>⚔️ ${dano} </p>
    
    `;
}

document.getElementById("vida").addEventListener("click",addVida)
function addVida(){
    // if - verifica uma condição (se senão)
    // igualdade ==
    if(vida > 19){
      alert("LIMITE DE VIDA");
    }else{
        vida++;
    }
   
    mostrarPersonagem();
}

document.getElementById("moeda").addEventListener("click",addMoeda)
function addMoeda(){
    var quantMoedas = confirm("adicionar 1 ou personalizado?");
    if(quantMoedas){
        moeda++;
    }else{
        moeda = Number(prompt("qual a quantidade de moedas?"))
    }
    
    mostrarPersonagem();
}

document.getElementById("dano").addEventListener("click",addDano)
function addDano(){
    var arma = prompt(`Qual arma o ${nome} está segurando? (MAISC)`)
    switch(arma){
        case "ESPADA":
        alert("você selecionou espada! 5 dano");
        dano = 5;
        break;

        case "ARCO E FLECHA":
        alert("você selecionou arco e flecha! 2 dano");
        dano = 2;
        break;

        default: 
        alert("arma não encontrada! tente novamente");
    }
    mostrarPersonagem();
}

mostrarPersonagem();