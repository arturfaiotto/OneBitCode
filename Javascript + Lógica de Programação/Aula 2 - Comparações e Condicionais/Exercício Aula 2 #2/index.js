// 1 - perguntar a distancia em anos-luz
// 2 - Oferecer uma lista de opções com
//     Parsec (pc)
//     Unidade Astronômica (AU)
//     Quilômetros (km)
// 3 - Perguntar qual operação deseja realizar
// 4 - Utilizar SWICTH para verificar a opção escolhida pelo usuário
//     Armazenar o nome da Unidade
//     Armazenar o valor convertido de anos-luz para unidade escolhida
// 5 - Exibir com alerta contento a distência em anos-luz e a distência convertida para a operação desejada
//     distância em anos-luz: <distancia em anos luz>
//     <conversão desejada>: <distancia convertida>
// 6 - Utilizar as seguintes conversões
//     1ly = 0,306601 pc
//     1ly = 63241,1 AU
//     1ly = 9,5*10¹² 
    
// 7 - Utilizar Math.pow(10, 12) para obter o valor de 10¹² na conversão para km
// 8 - Caso o usuário digite uma opção que não exita, o alert deve ser:
//     distância em anos-luz: <distancia em anos luz>
//     Unidade não identificada>: Conversão fora do escopo

let DistConvertida = 0;
let distanciaLY = prompt('Qual a distancia em anos-luz?');
let opeConversao = prompt('Qual das seguintes operações deseja utilizar para converter a velocidade? \npc - Parsec\nAU - Unidade Astronômica\nkm - Quilômetros\nSair').toLocaleUpperCase()

switch (opeConversao) {
    case "PC":
        DistConvertida = distanciaLY / 0.303301
        alert('Distância em Anos-luz: ' + distanciaLY + '\nDistância em '+ opeConversao + ': ' + DistConvertida)
    break;
    case "AU":
        DistConvertida = distanciaLY / 63241.1
        alert('Distância em Anos-luz: ' + distanciaLY + '\nDistância em '+ opeConversao + ': ' + DistConvertida)
    break;
    case "KM":
        DistConvertida = distanciaLY / 9.5*Math.pow(10,12)
        alert('Distância em Anos-luz: ' + distanciaLY + '\nDistância em '+ opeConversao + ': ' + DistConvertida)
    break;
    case "4":
        alert('Obrigado por utilizar nosso sistema.')
    break;
    default:
        alert('Distância em Anos-luz: ' + distanciaLY + '\nUnidade não identificada: Conversão fora do escopo.')
    break;
}    