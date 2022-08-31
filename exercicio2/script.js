const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const quantidadeCaracteres = minhaString.length
let substituiLetra = minhaString.replaceAll("________", "sticioso")

console.log (minhaString.trim())
console.log ("Quantidade de Caracteres antes: " +quantidadeCaracteres)
console.log ("Quantidade de caracteres depois:" +minhaString.trim().length)
console.log (substituiLetra)