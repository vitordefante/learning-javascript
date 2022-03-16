

function datetime1() {
    var agora = new Date()
    var diasem = agora.getDay()
    var mes = agora.getMonth()
    var ano = agora.getFullYear()

    console.log('')
    switch(diasem) {
        case 0:
            diasem = 'Domingo'
            break
        case 1:
            diasem = 'Segunda-Feira'
            break
        case 2:
            diasem = 'Terça-Feira'
            break
        case 3:
            diasem = 'Quarta-Feira'
            break
        case 4:
            diasem = 'Quinta-Feira'
            break
        case 5:
            diasem = 'Sexta-Feira'
            break
        case 6:
            diasem = 'Sabado'
            break
    }

    console.log(mes)
    console.log(diasem)
    console.log(ano)


}

datetime1()
