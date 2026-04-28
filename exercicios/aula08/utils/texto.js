// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
  // escreva seu código aqui
  const minusculo = nome.toLowerCase()
  const primeiraLetra = minusculo.charAt(0).toUpperCase()
  const resto = minusculo.slice(1)
  return primeiraLetra + resto
}
