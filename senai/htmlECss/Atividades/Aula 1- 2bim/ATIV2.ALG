Algoritmo "Simulado Aula 8"
Var
v1 : vetor[1..15] de inteiro
v2 : vetor[1..15] de inteiro
i: inteiro

Inicio
escreval("Mande 15 numeros.")
para i <- 1 ate 15 faca

leia(v1[i])


fimPara
escreval("Mande mais 15 numeros.")
para i <- 1 ate 15 faca
leia(v2[i])

fimPara

para i <- 1 ate 15 faca
se(v1[i] = v2[i]) entao
escreval("Os numeros iguais são ", v1[i],"e",v2[i])

fimSe
fimPara



fimAlgoritmo