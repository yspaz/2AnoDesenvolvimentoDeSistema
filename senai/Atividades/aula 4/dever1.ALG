Algoritmo "exercicio 1"

Var
peso , limite , excesso , multa : real

Inicio
multa <- 4.00
limite <- 50.00
escreval("qual e o peso dos peixes?")
leia (peso)
 excesso <- peso - limite
se (peso <= 50.00) entao
    escreval("ZERO")
senao (excesso > 50.00)entao
  excesso <- peso - limite
escreval("valor R$" , excesso + multa,")
fimse

Fimalgoritmo