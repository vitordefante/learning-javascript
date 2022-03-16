var idade = 67

if (idade < 16) {
    console.log('Voce nao pode votar no momento.')
} else if (idade < 18 || idade >= 65) {
    console.log('Voce pode votar.')
} else {
    console.log('Voce precisa votar.')
}