function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    let contspace = document.getElementById('contagem')
    contspace.innerHTML = ''

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Preencha todos os dados!")
    } else {
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
        
       for (c = i; c <= f; c += p) {
           contspace.innerHTML += `${c} 👉🏻 `
       }

       contspace.innerHTML += '🏁'
    }
}