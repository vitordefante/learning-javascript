var num = document.getElementById('numero')
var lista = document.getElementById('lista-numeros')

var  todotxt = document.getElementById('todo')
var  maiortxt = document.getElementById('maior')
var  menortxt = document.getElementById('menor')
var  somatxt = document.getElementById('soma')
var  mediatxt = document.getElementById('media')
var resdiv = document.getElementById('res')
var insiratxt = document.getElementById('insira')

var listanumeros = [];

function adicionar() {
    let num1 = Number(num.value)
    if (listanumeros.includes(num1)) {
        window.alert(`O número ${num1} já foi inserido.`)
    }
    else {
        todotxt.innerText = ''
        maiortxt.innerText = ''
        menortxt.innerText = ''
        somatxt.innerText = ''
        mediatxt.innerText = ''
        listanumeros.push(num1)
        lista.innerHTML += `<li> O número <span id="numres">${num1}</span> foi adicionado`
        num.value = ''
        num.focus()
    }
}

function soma(array) {
    var tot = 0
    for (let n = 0; n < array.length; n++) {
        tot += array[n]
    }
    return tot
}

function finaliza() {
    if (listanumeros.length == 0) {
        insiratxt.innerText = ''
        insiratxt.innerText += `Insira pelo menos um número para finalizar.`
    }
    else {
        insiratxt.innerText = ''
        todotxt.innerText = ''
        maiortxt.innerText = ''
        menortxt.innerText = ''
        somatxt.innerText = ''
        mediatxt.innerText = ''
        todotxt.innerHTML += `Ao todo, temos <span id="numres">${listanumeros.length}</span> números cadastrados.`
        maiortxt.innerHTML += `O maior número inserido foi <span id="numres">${Math.max(...listanumeros)}</span>.`
        menortxt.innerHTML += `O menor número inserido foi <span id="numres">${Math.min(...listanumeros)}</span>.`
        somatxt.innerHTML += `O resultado da soma de todos os números inseridos é <span id="numres">${soma(listanumeros)}</span>.`
        mediatxt.innerHTML += `A média dos valores inseridos é <span id="numres">${soma(listanumeros) / listanumeros.length}</span>.`
    }
   
}
