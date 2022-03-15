function calc() {
    var result = window.document.getElementById('res')
    var veltxt = window.document.getElementById('velocidade')
    var multado = window.document.getElementById('multa')
    var limite = 80
    var vel = Number(veltxt.value)

    result.innerText = `A sua velocidade é de ${vel}`
    if (vel > limite) {
        multado.innerText = 'Voce foi multado por excesso de velocidade!'
    }

    else {
        multado.innerText = null
    }
}