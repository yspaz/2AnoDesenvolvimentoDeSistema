var jogo = [
   ['BOTAS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfktlFkjcqQ0RN19PFSHI6XfT4YCtkZz3g6Q&s',2 ],
   ['MOCHILA','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSM25GNsznEemS6H1CpslKyM7A8eRKGCcUw&s', 3 ],

  ];

  doces.map( cadaJogo => {
    document.getElementById("produtos").innerHTML += `
     <div class-"produto">
        <img src="${cadaJogo[1]}" alt="Botas">
          <h1>${cadaJogo[0]}</h1>
         <p>R$ ${cadaJogo[2]}</p>
         <button type="button">COMPRAR</button>
         </div>
         `
  });