function aula(){
    //enquanto () faca
//para on ate con2 interable
var i = 0;
  
while(i < 10){
   console.log(i);
   i++ 
}

while (false) {
  var pergunta = confirm("repete? ");

  if (pergunta == false){ 
    break;
  }

}
for(var i;i<100;i++){
    document.querySelector('main').innerHTML += `<p> SOU TOP </p>`;
}
//faz e verifica (aceita false)
do{
 console.log(i);
   i++ 
}while(i<10)
}

function produtos(){
    for(var i = 0;i<10;i++){
         document.getElementById("produtos").innerHTML +=`
         <img id="pairulito" src="https://comercialclaudia.com.br/wp-content/uploads/2018/04/PIRULITO-COLORIDO-GIGANTE-C10-768x1156.jpg" alt="pirulito">
         <h1>PIRULITO COLORIDO</h1>
        <p>R$ 20</p>
        <button type="button">COMPRAR</button>
        <button type="button">ADICIONAR AO CARRINHO</button>'
        `;
    }
}
 produtos();