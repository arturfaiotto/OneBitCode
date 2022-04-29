function doubleSpeed(velocidade, printer) {
    console.log('Entrei em doubleSpeed')
    let novaVelocidade = velocidade * 2
    printer(novaVelocidade)
    return novaVelocidade
}

let printVelocidade = velocidade => {
    console.log('Nova velocidade: ' + velocidade + 'km/s')
}

