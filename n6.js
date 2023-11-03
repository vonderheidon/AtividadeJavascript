function calcularMedia(num1, num2) {
    var resultado = 0
    if ((num1 < 0 || num1 > 10) && (num2 < 0 || num2 > 10)) {
        console.log(`Os números ${num1} e ${num2} são inválidos, digite números entre 0 e 10`)
    } else if (num1 < 0 || num1 > 10) {
        console.log(`O número ${num1} é inválido, digite um número entre 0 e 10`)
    } else if (num2 < 0 || num2 > 10) {
        console.log(`O número ${num2} é inválido, digite um número entre 0 e 10`)
    } else {
        let media = (num1 + num2) / 2
        console.log(`A media entre os números ${num1} e ${num2} é ${media}`)
    }
    
}
calcularMedia(15,30)
calcularMedia(0, 10)
calcularMedia(7, 7)