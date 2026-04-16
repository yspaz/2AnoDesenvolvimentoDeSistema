Algoritmo "abidasMEL"

Var
 opcao : real
  valorTotal : real
  cancelado : logico
  

Inicio

enquanto (verdadeiro) faca

   escreval("*******************")
   escreval("*******abidas******")
   escreval("-------------------")
   escreval("1) tenis - R$ 150,00")
   escreval("2) camiseta - R$ 350,00")
   escreval("3) short - R$ 99,99")
   escreval("4) blusa de frio - R$ 450,99")
   escreval("5) conjunto - R$ 5000,50")
   escreval("6) FINALIZAR A COMPRA")
   escreval("7) SAIR")
   leia (opcao)

   escolha (opcao)
    caso 1
     limpaTela
     valorTotal <- valorTotal + 150
     escreval ("Valor da compra : R$", valorTotal)
    caso 2
     limpaTela
      valorTotal <- valorTotal + 350
     escreval ("Valor da compra : R$", valorTotal)
    caso 3
     limpaTela
     valorTotal <- valorTotal + 99.99
     escreval ("Valor da compra : R$", valorTotal)
    caso 4
     limpaTela
      valorTotal <- valorTotal + 450.99
     escreval ("Valor da compra : R$", valorTotal)
    caso 5
     limpaTela
      valorTotal <- valorTotal + 5000.50
     escreval ("Valor da compra : R$", valorTotal)
     caso 6
     escreval("SELECIONOU FINALIZAR")
     cancelado <- falso
     interrompa
     caso 7
     escreval("SELECIONOU SAIR")
     cancelado <- verdadeiro
     interrompa
     outrocaso
     escreval("Erro! opção inválida")

   fimEscolha
fimEnquanto
se (cancelado) entao
escreval("pedido concelado")
 senao
   escreval ("VALOR FINAL R$",valorTotal)
   fimSe
Fimalgoritmo