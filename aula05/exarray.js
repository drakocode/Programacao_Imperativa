let compras=['pão', 'café', 'feijão', 'batatas', 'arroz']
console.log(compras)

//o push mostra a posição do elemento que você chamou dentro da array
console.log('o metodo push mostra a posição do elemento que você chamou dentro da array')
console.log(compras.push('arroz'))

//o pop exclui o ultimo item do array e o imprime na tela
console.log('o metodo pop exclui o ultimo item do array e o imprime na tela')
let ultimoItem= compras.pop()
console.log(compras)
compras.pop()
console.log(ultimoItem)
console.log(compras)

//o shift exclui o primeiro item do array e o imprime na tela
console.log('o metodo shift exclui o primeiro item do array e o imprime na tela')

let comprasShift=compras.shift()
compras.shift()
console.log(compras)
console.log(comprasShift)

//let primeiroItem=compras.shift()
console.log(compras)
//console.log(primeiroItem)
compras.shift()
console.log(compras)

//o unshift adiciona itens no inicio do array
console.log('o metodo unshift adiciona itens no inicio do array')
console.log(compras)
compras.unshift('abacate')
console.log(compras)
compras.unshift('leite','manteiga')
console.log(compras)

// o .join converte todos os elementos do array em string, e com um separador opcional
console.log('o metodo join retorna como string todos os elementos do array, e com um separador opcional')
let separadosPorPonto=compras.join('. ')
let separadosPorLine=compras.join('_')
console.log(separadosPorLine)
console.log(separadosPorPonto)

//o indexOf retorna a posição do item de tras pra frente
//o lastIndexOf retorna a posição do item da frente pra tras
// se não for encontrado o item é retornado -1
console.log('o metodo index of retorna a posição do item de tras pra frente')
console.log(compras.indexOf('feijão'))

console.log('o metodo indexOf retorna a posição do item da frente pra tras')
console.log(compras.lastIndexOf('batatas'))

console.log('mas se não for encontrado o item é retornado -1')
console.log(compras.lastIndexOf('caju'))

//o include retorna um valor booleano para o item pesquisado
console.log('o metodo include retorna um valor booleano para o item pesquisado')
console.log(compras.includes('leite'))
console.log(compras.includes('miojo'))