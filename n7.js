function retornarDia(dia) {
    dia = dia.toUpperCase()
    switch(dia) {
        case "SEGUNDA":
            console.log("REUNIÃO")
            break
        case "TERÇA":
            console.log("PALESTRA")
            break
        case "QUARTA":
            console.log("WORKSHOP")
            break
        case "QUINTA":
            console.log("TRABALHO REMOTO")
            break
        case "SEXTA":
            console.log("AGENDAMENTO SEMANAL")
            break
        case "SÁBADO":
            console.log("SHOPPING")
            break
        case "DOMINGO":
            console.log("PRAIA")
            break
        default:
            console.log("Dia inválido.")
    }
}
retornarDia("SEGUNDA")
retornarDia("Sábado")