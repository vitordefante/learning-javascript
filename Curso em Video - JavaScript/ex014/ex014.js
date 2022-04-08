let num = [5, 8, 3, 9, 3]

//Adiciona um valor num determinado indice do array
num[5] = 4

//Adiciona um valor no final do array
num.push(0)

//Verifica o valor de determinado indice no array
primeiroItem = num[0]

//Verifica quantos indices o array possui
num.length

//Filtra o array pela ordem crescente dos valores
num.sort()

//Busca um elemento e retorna o indice que se encontra
num.indexOf(3)

console.log(`\nO array inserido possui os valores ${num}
O array possui ${num.length} indices
O primeiro valor do array é o ${num[0]}\n`)
