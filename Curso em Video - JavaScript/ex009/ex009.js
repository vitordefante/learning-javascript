function datetime1() {
    var agora = new Date()
    var diasem = agora.getDay() // dia da semana
    var mes = agora.getUTCMonth() // mes
    var ano = agora.getFullYear() // ano
    var horas = agora.getHours() // horas
    var minutos = agora.getMinutes() // minutos
    var diames = agora.getDate() // dia do mes


    var timeinpage = window.document.getElementById('time') // Elemento onde mostra as horas na pagina
    var todayinfopage = window.document.getElementById('dia-semana') // Elemento onde mostra as informacoes do dia na pagina

    var morning = 'images/Morning 3.jpg'
    var afternoon = 'images/Afternoon 3.jpg'
    var night = 'images/Night.jpg' 

    if (horas >= 6 && horas < 13) {
        document.body.style.backgroundImage = `url('${morning}')`
    } else if (horas >= 13 && horas < 18) {
        document.body.style.backgroundImage = `url('${afternoon}')`
    } else {
        document.body.style.backgroundImage = `url('${night}')`
    }

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

    switch(mes) {
        case 0:
            mes = 'Janeiro'
            break
        case 1:
            mes = 'Fevereiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3:
            mes = 'Abril'
            break
        case 4:
            mes = 'Maio'
            break
        case 5:
            mes = 'Junho'
            break
        case 6:
            mes = 'Julho'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Setembro'
            break
        case 9:
            mes = 'Outubro'
            break
        case 10:
            mes = 'Novembro'
            break
        case 11:
            mes = 'Dezembro'
            break
    }

    var currenttime = `${horas}:${minutos}`
    if (minutos < 10) {
        var currenttime = `${horas}:0${minutos}`
    } else {
        var currenttime = `${horas}:${minutos}`
    }
    
    var todayinfo = `${diasem}, ${diames} de ${mes} de ${ano}.`

    timeinpage.innerText = currenttime
    todayinfopage.innerText = todayinfo
}

datetime1()
