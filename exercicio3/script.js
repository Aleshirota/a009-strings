//Crie a const para a frase aqui
const frase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"")
const novaFrase = frase.replace("verde","rosa").replace("azul","laranja")
const toUpperCase = "mas não deixe o gato sair"
const fraseToUpperCase = toUpperCase.toUpperCase()
const incluiVerde = novaFrase.includes("verde")
const incluiLaranja = novaFrase.includes("laranja")

console.log (`${novaFrase} ${fraseToUpperCase}
${incluiVerde} 
${incluiLaranja}`)

