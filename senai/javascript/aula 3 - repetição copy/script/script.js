//  <div>
//          <img id="pairulito" src="https://comercialclaudia.com.br/wp-content/uploads/2018/04/PIRULITO-COLORIDO-GIGANTE-C10-768x1156.jpg" alt="pirulito">
//          <h1>PIRULITO COLORIDO</h1>
//         <p>R$ 20</p>
//         <button type="button">COMPRAR</button>
//         <button type="button">ADICIONAR AO CARRINHO</button>
//         </div>

function aula(){
  //variavel <- vetor de [1..3]des caractere
  var filmes = [
    "Interestelar",
    "Meninas Malvadas",
    "Diabo veste prada",
  ];

  console.log(filmes);
  console.log(fimemes[1]);
  console.log("um filme que está estourando é", filmes[0]);
// push adiciona no ultimo
  filmes.push("As branquelas");
  console.log(filmes);
//shift adiciona no primeiro
  filmes.unshift("Homem aranha")
  console.log(filmes);
// pop deleta o ultimo
  filmes.pop();
  console.log(filmes);
  //shift deleta o primeiro
  filmes.shift();
  console.log(filmes);
// splice (indice, quatos quer sobrescrever , dados)
  filmes.splice(1,1);
  console.log(filmes);
  
  filmes.splice(1,1,"Diabo veste prada 1")
  console.log(filmes);

  filmes.splice(1,0,"Kill bill vol 1 e 2")
  console.log(filmes);

  var filmesCopia = filmes.slice();
  console.log(filmesCopia);

  for(var i = 0; i < filmes.length; i++){

    filmes.map( cadaFilme => {
    console.log(cadaFilme);
  });

  }
}





var doces = [
   ['PIRULIRO', 'https://comercialclaudia.com.br/wp-content/uploads/2018/04/PIRULITO-COLORIDO-GIGANTE-C10-768x1156.jpg" alt="pirulito', 20],
   ['FERREIRO ROCHER','https://www.ferrerorocher.com/br/sites/ferrerorocher20_br/files/2021-05/gfx-12x.jpg?t=1775137604', 15.99],

  ];

  doces.map( cadaDoce => {
    document.getElementById("produtos").innerHTML += `
     <div class-"produto">
        <img src="${cadaDoce[1]}" alt="Pirulito">
          <h1>${cadaDoce[0]}</h1>
         <p>R$ ${cadaDoce[2]}</p>
         <button type="button">COMPRAR</button>
         </div>
         `
  });