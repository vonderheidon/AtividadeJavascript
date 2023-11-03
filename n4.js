function calcular(num1, num2) {
    let resultado = 0
    if (num1 != num2) {
        resultado = num1 + num2
        console.log(`A soma entre ${num1} e ${num2} é ${resultado}`)
    } else {
        resultado = (num1 + num2) * 3
        console.log(`O triplo da soma entre ${num1} e ${num2} é ${resultado} `)
    }
}

calcular(5, 2)
calcular(3, 3)