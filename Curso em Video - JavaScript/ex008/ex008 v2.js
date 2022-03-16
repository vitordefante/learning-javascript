var agora = new Date()
var hours = agora.getHours()
var minutes = agora.getMinutes()

hours = 0

if (hours >= 0 && hours < 6) {
    console.log('Boa madrugada!')
} else if (hours >= 6 && hours < 13) {
    console.log('Bom dia!')
} else if (hours > 12 && hours < 18) {
    console.log('Boa tarde!')
} else if (hours >= 18) {
    console.log('Boa noite!')
}