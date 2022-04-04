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

       

       if (p == 0) {
        null        
       }

       else if (p < 0) {
           p *= -1
       }

       else if (i > f) {
        for (var c = i; c >= f; c -= p) {
            if (c % 1 != 0){
                c = parseFloat(c)
                contspace.innerHTML += `${c.toFixed(2)} 👉🏻 `
            }
            else{
                c = parseInt(c)
                contspace.innerHTML += `${c} 👉🏻 `
            }
            
        }
       } 
        else{
            for (var c = i; c <= f; c += p) {
                if (c % 1 !== 0) {
                    c = parseFloat(c)
                    contspace.innerHTML += `${c.toFixed(2)} 👉🏻 `
                } else {
                    c = parseInt(c)
                    contspace.innerHTML += `${c} 👉🏻 `
                }
                
            }
        }
       

       contspace.innerHTML += '🏁'
    }


}
