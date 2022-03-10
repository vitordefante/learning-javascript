var nome = window.prompt("Digite seu nome.")
nome = nome.replace(" ", "")
document.write(`Ola ${nome}, seja bem-vindo! Seu nome possui ${nome.length} letras.`)