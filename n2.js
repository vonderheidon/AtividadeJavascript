
function separarExtensao(arquivo){
    const separado = arquivo.split(".")
    console.log(`A extensão desse arquivo é ${separado[1]}`)
}

separarExtensao("texto.docx")
separarExtensao("roteiro.pdf")