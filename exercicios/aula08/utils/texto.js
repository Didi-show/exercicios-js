// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
  // escreva seu código aqui
  if (typeof nome !== 'string' || nome.length === 0) {
    return ''
  }
  const nomeMinusculo = nome.toLowerCase()
  const primeiraLetra = nomeMinusculo.charAt(0).toUpperCase()
  const restoDoNome = nomeMinusculo.slice(1)
  return primeiraLetra + restoDoNome
}
