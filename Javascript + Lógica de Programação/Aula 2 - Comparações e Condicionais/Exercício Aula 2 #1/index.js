// Neste exercício vamos simular o sistema de navegação de uma nave interagindo com o usuário.
// O sistema deve fazer o seguinte:
//     Perguntar o nome do piloto 
//     Colocar a velocidade inicial da nave como 0
//     perguntar a que velocidade ele gostaria de acelerar a nave 
//     pedir uma confirmação informando que está indo para velocidade X km/h.
//     Exibir umas das seguintes mensagens com base na velocidade escolhida:
//     - Se for menor que 0km/s - "A Nave está parada. Considere partir e aumentar a velocidade"
//     - Se for menor que 40km/s - "Você está devagar, podemos aumentar mais"
//     - Se for maior ou igual a 40Km/s e menor que 80km/s - "Parece uma boa velocidade para manter"
//     - Se for maior ou igual a 80km/s e menor que 100km/s - "Velocidade alta. Considere diminuir"
//     - Se for maior ou igual a 100km/s - "Velocidade perigosa. Controle automático forçado"
//    Imprimir no final o nome do Piloto e a velocidade final. 

let velocidadeInicial = 0;

let nome = prompt('Digite seu nome Piloto.');
alert(`Bem vindo, ${nome}`)
let velocidadeNave = prompt('Qual velocidade gostaria de acelerar a nave?')
if (velocidadeNave !== null) {
    let confirmVelocidade = confirm('Você digitou ' + velocidadeNave + 'KM/s. Deseja confirmar?')
    if (confirmVelocidade === true) {
        if (velocidadeNave <= 0) {
            alert("A Nave está parada. Considere partir e aumentar a velocidade.")
        } else if (velocidadeNave < 40) {
            alert("Você está devagar, podemos aumentar mais.")
        } else if (velocidadeNave >= 40 && velocidadeNave < 80) {
            alert("Parece uma boa velocidade para manter.")
        } else if (velocidadeNave >= 80 && velocidadeNave < 100) {
            alert("Velocidade alta. Considere diminuir.")
        } else {
            alert("Velocidade perigosa. Controle automático forçado.")
        } alert('Nome do piloto: ' + nome + '\nVelocidade atual da nave: ' + velocidadeNave + 'KM/s.')
    } alert('Obrigado, até a proxima. ' + nome + '.')
} else {
    alert('Obrigatório uma velocidade. \nA Nave está parada. Considere partir e aumentar a velocidade. \nSaindo pro sistema.' )
}