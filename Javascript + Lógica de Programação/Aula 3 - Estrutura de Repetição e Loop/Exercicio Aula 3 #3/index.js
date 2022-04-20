// Para este problema, precisamos:
//     1 - Solicitar o nome da espaçonave
//     2 - Utilizar uma estrutura de repetição para imverter o nome da nave
//         Esta estrutura deverá percorrer a neva do ultimo carecteve até o primeiro
//     3 - Durante a inversão, procurar pelo caractere proibido
//     4 - Caso encontre, a inversão deve ser parada onde estiver
//     5 - O nome invertido deve ser impresso.
//         Mesmo que não esteja completo por ter encontrado o caractere proibido.
//     6 - Exibir um alerta com o novo nome da nava
//     7 - A impressão deve ser feita com um alerta e a seguinte mensagem:
//         Nome original da nave: <nome original>
//         Nome após ocultação: <nome invertido>

let novoNomeInvertido = ""
let nomeDaNave = prompt(`Digite o nome da espaçonave: `)
alert(`Você digitou ${nomeDaNave}, o caracter proibido é A`)
    for (let i = nomeDaNave.length -1; i >= 0 ; i--) {
        if(nomeDaNave[i] === "a"){
            alert(`Foi encontrado um caractere proibibo, sistema paralizado.`)
            break
        }else{
            novoNomeInvertido+=nomeDaNave[i]
        }
    }    
alert(`Nome original da Nave: ${nomeDaNave}.\nNome após ocultação: ${novoNomeInvertido}`)