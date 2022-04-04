function multiplicar() {
    let numtxt = document.getElementById('number')
    let num = Number(numtxt.value)
    let restxt = document.getElementById('res')
    restxt.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
        restxt.innerHTML += `${num} x ${c} = ${num * c}<br>`
    }
}
