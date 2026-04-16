Algoritmo "Aula7atv"

Var
mercadoria : vetor[1..3] de caractere
valor : vetor[1..3] de real
i : inteiro
estoque: vetor [1..3] de inteiro
numero : vetor [1..10] de inteiro
Inicio
//atividade 1
mercadoria[1] <- "sabão"
mercadoria[2] <- "perfume"
mercadoria[3] <- "desinfetante"
escreval("mercadorias são:")
para i <- 1 ate 3 faca
   escreval(mercadoria[i])
fimPara
para i <- 1 ate 3 faca
escreval("digite o valor das mercadorias?")
leia(valor[i])
escreval (mercadoria[i])
fimPara
escreval("valor total das mercadorias", valor[1],valor[2],valor[3])
//atividade 2
para i <- 1 ate 10 faca
escreval("digite os numeros para ficarem ao contrário:")
leia (numero[i])
fimPara
escreval( numero[10], numero[9], numero[8], numero[7], numero[6], numero[5], numero[4], numero[3], numero[2], numero[1])

Fimalgoritmo