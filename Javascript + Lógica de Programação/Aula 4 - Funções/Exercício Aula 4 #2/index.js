// Neste exercício vamos simular o computador de bordo de uma espaçonave no momento em que ela inicia a parada até abrir as comportas para os pilotos sairem.

// 1 - Considerem que a nave está a 150KM/s.
// 2 - Crie uma função para desacelerar 20Km/s a cada segundo.
//     Considere, no código, que cada iteração de um laço de repetição é 1 segundo.
// 3 - Esta função será uma HOG e também deve imprimir cada atualização que houver na velocidade da nave
//     Esta impressão deve ser feita por meio de callback que essa função receberá.
// 4 - Ao final, exiba uma mensagem informando que a nave está parada e as comportas podem ser abertas.


// var velocidadeAtual = 150

// function desacelerando(velocidade, getStatus) {
//     var novaVelocidade = velocidade - 20
//     getStatus(novaVelocidade)
//     return novaVelocidade
// }
// let printVelocidade = velocidade => {
//     if(velocidade >= 0) {
//         console.log('Nova velocidade: ' + velocidade + 'km/s')
//     } else {
//         console.log('Nave parada. As comportas podem ser abertas.')
//     }
// }

// do {
//     velocidadeAtual = desacelerando(velocidadeAtual, printVelocidade)
// } while (velocidadeAtual >= 0)



//Resolução diferente, mesmo resultado abaixo.



function desacelerando (velocidade, getStatus) {
    let reduzirVelocidade = 20

    while (velocidade > 0) {
    getStatus(velocidade)
    velocidade -= reduzirVelocidade
    }
    alert('Nave parada. As comportas podem ser abertas.')
}

let velocidadeNave = 150

desacelerando(velocidadeNave, velocidade => alert('velocidade atual: ' + velocidade + 'km/s' ))