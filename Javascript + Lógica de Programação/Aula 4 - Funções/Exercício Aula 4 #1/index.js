// Neste exercício, vamos criar um programa de bordo para nossa nave que receba:
//     O nome da nave
//     A velocidade da nave (inicia com 0)
// E um menu deve ser exibido para que o usuário escolha entre as seguintes opções:
//     1 Acelerar a nave em 5Km/s
//     2 Desacelerar a nave em 5km/s
//         A velocidade da nave não pode ser menor que 0
//     3 imprimir dados de bordo
//         Deve ser impresso o nome da nave com sua velocidade atual
//     4 Sair do programa
// Caso a pessoa escolha um número que não está na lista, é necessário exibir o menu novamente até que seja escolhida uma opção válida. 

// Para fazer este app, precisaremos:
//     - Uma função para cada ação do menu de acelerar, desacelerar e imprimir dados de bordo.
//     - Encerrar o app somente quando digitar para sair.

let nomePiloto = prompt('Seja bem vindo a sistema de bordo da sua nave. \nQual o seu nome, piloto?')
let nomeNave = prompt('Para começar, digite o nome da sua nave:')
let velocidadeAtual = 0
let opcaoEscolhida = ""

function speedUp () {
    let novaVelocidade = velocidadeAtual + 5
    velocidadeAtual = novaVelocidade
    alert('Acelerando a nave em 5KM/s, sua velocidade atual é ' + velocidadeAtual + 'Km/s')
}

function speedDown () {
    if (velocidadeAtual === 0) {
        alert('Sua velocidade atual é 0KM/s, não é possível reduzir.')
    } else {
        let novaVelocidade = velocidadeAtual - desaceleracao
        velocidadeAtual = novaVelocidade
        alert('Desacelerando a nave em 5KM/s, sua velocidade atual é ' + velocidadeAtual + 'Km/s')
    }
}

function imprimeInformações () {
    alert(nomePiloto + ' a Nave Espacial ' + nomeNave + 
        '\nencontra-se na velocidade ' + velocidadeAtual + 'KM/s')
}

function sair () {
    alert('Obrigado por utilizar o sistema de bordo da Nave ' + nomeNave + 
    '. \nEstamos desacelerando e desligando tudo pra você. \nBom descanço, ' + nomePiloto)
}

alert(nomePiloto + ' a Nave Espacial ' + nomeNave + 
'\nencontra-se na velocidade 0KM/s.' )

do {
    
    opcaoEscolhida = prompt(
    'Qual ação deseja realizar?\n' + 
    '\n1 - Acelerar a nave em 5Km/s.' + 
    '\n2 - Desacelerar a nave em 5km/s.' + 
    '\n3 - Imprimir dados de bordo.' + 
    '\n4 - Sair do sistema.\n'
    )

    switch(opcaoEscolhida) {
        case '1':
            speedUp()
        break;
        case '2':
            speedDown()
        break;
        case '3':
            imprimeInformações()
        break;
        case '4':
            sair()
        break;
        default:
            alert('A opção digita não é válida, por favor escolha novamente.')
        break;
    }

} while (opcaoEscolhida !== '4');