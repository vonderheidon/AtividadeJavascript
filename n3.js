function imprimirDiferenca(num) {
    let resultado = 0
    if (num > 13) {
        resultado = (num - 13) * 2
        console.log(`O dobro da diferença entre ${num} e 13 é ${resultado}`)
    } else {
        resultado = num - 13
        console.log(`A diferença entre ${num} e 13 é ${resultado}`)
    }
}

imprimirDiferenca(25)
imprimirDiferenca(5)