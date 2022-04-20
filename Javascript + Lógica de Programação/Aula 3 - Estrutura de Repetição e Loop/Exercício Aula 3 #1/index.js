// Para estre problema, precisamos:
//     1 - Pedir o nome da nave.
//     2 - Perguntar se deseja entrar na dobra com a seguinte mensagem:
//         Deseja entrar na dobra espacial?
//         1 - Sim
//         2 - Não
//     Se a mensagem for SIM, contabilizaremos uma dobra.
//     3 - O usuário deve responder se deseja resalizar a proxima dobra
//         Deseja realizar a próxima dobra espacial?
//         1 - Sim
//         2 - Não
//     Para cada SIM vamos contabilizar mais uma dobra.
//     4 - A pergunta deve ser feita novamente até que a escolha seja NÃO.
//     5 - Ao escolher NÃO em qualquer pergunta a contagem deve ser encerrada.
//     6 - O programa deve informar o nome da nave e o número de vezes seguidas que a nave realizou a dobra.

let dobras = 0
let contagemDobras = 0
let entrarNaDobra = 1
let novaDobra = 1
let nomeNave = prompt('Digite o nome da Nave Espacial: ')


while(entrarNaDobra == 1){
    entrarNaDobra = prompt('Deseja entrar na dobra espacial? \n1 - Sim\n2 - Não\n\nEscolha umas das opções.')
    while(entrarNaDobra != 1 && entrarNaDobra != 2){
        alert('Você digitou uma opção inválida, tente novamente.')
        entrarNaDobra = prompt('Deseja entrar na dobra espacial? \n1 - Sim\n2 - Não\n\nEscolha umas das opções.')
    }
    if (entrarNaDobra == 1) {
        contagemDobras += 1
    }

    while(entrarNaDobra == 1 && novaDobra == 1) {
        novaDobra = prompt(`Deseja realizar a próxima dobra espacial? \n1 - Sim\n2 - Não\n\nEscolha umas das opções. Você já realizou ${contagemDobras} dobra(s).`)
        while(novaDobra != 1 && novaDobra != 2){
            alert('Você digitou uma opção inválida, tente novamente.')
            novaDobra = prompt(`Deseja realizar a próxima dobra espacial? \n1 - Sim\n2 - Não\n\nEscolha umas das opções. Você já realizou ${contagemDobras} dobra(s).`)
        }
        if (novaDobra == 1) {
            contagemDobras += 1
        } else if (novaDobra == 2) {
            entrarNaDobra = 2
        }
    }
}
alert(`Saindo do sistema da nave. \n\nNome da nave: ${nomeNave}\nQuantidade de dobras realizadas: ${contagemDobras}`)