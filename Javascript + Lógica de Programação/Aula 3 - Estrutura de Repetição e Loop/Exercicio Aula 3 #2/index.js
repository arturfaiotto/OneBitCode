// Neste exercício utilizaremos o for para construir um ocultador de nomes. Ele vai percorrer o nome de uma nave e substituir uma letra que o usuário desejar.

// Para este problema, precisamos:
//     Solicitar o nome da espaçonave;
//     Perguntar o carectere que ele deseja substituir;
//     Perguntar por qual caractere ele deseja subitituir
//     Utilizar o for para resolver o problema
//     Para cada caractere igual ao informado substituir pelo novo caractere
//     Exibir um alerta com o novo nome da nave
//         O novo nome da nave é <Nome da nave>

let novoNomeDaNave = ""

let nomeDaNave = prompt(`Digite o nome da Nave: `).toUpperCase()
let caractereSub = prompt(`Qual caractere deseja substituir de ${nomeDaNave}? `).toUpperCase()
let NovoCaractere = prompt(`Por qual caractere deseja substitui o ${caractereSub} do nome original? `).toUpperCase()

for(let i = 0; i < nomeDaNave.length; i++) {
    if(nomeDaNave[i] == caractereSub) {
        novoNomeDaNave += NovoCaractere
       } else {
        novoNomeDaNave += nomeDaNave[i]
    }
}
alert(`O novo nome da nave é: ${novoNomeDaNave.toLowerCase()}`)