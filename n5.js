function removerCaracter(palavra, posicao) {
    var palavraMod = ""
    if (posicao < 0) {
        console.log("A posição informada deve ser maior ou igual a zero.")
    } else if (posicao < palavra.length) {
        let caracter = palavra.charAt(posicao)
        const separada = palavra.split("")
        for(var i = 0; i < separada.length; i++  ){
            if (i != posicao) {
                palavraMod += separada[i]
            }
        }
        console.log(`A palavra "${palavra}" com o caracter "${caracter}" removido da posicao "${posicao}" fica "${palavraMod}"`)
    } else {
        console.log("A posição informada é maior que o comprimento da palavra.")
    }
}
removerCaracter("competição", 4)
removerCaracter("meteorito", 0)