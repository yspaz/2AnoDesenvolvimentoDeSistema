//var nomePersonagem ="homem aranha Noir";
//var vidaPersonagem = 4;

//personagem = [
//["homem aranha noir",3]
//]

class Personagem {
    nome;
    vida;
    tamanho; 
    velocidae;
    habilidade;
    atacar(){};
    abaixar(){};
    pular(){}; 
}

p1 = new Personagem();
p1.nome = "HOMEM ARANHA NOIR";
p1.vida = 4;
p1.tamanho ="médio";
p1.velocidade = "normal";
p1.habilidade = ("atlético","spider","armas")

class PersonagensEspeciais {
    Badnics(nomeP,vida,tamanho,velocidade,habilidade){
        this.nome = nome;
        this.vida = vida;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.habilidade = habilidade;
        this.atacar = function(){
            alert("Puf")
        };
        // todosPersonagens[0].atacar()
    }
}
