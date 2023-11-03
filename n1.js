const ladoA = 5
const ladoB = 6
const ladoC = 7
const semiPerimetro = (ladoA + ladoB + ladoC) / 2
let area = Math.sqrt(semiPerimetro * (semiPerimetro - ladoA) * (semiPerimetro - ladoB) * (semiPerimetro - ladoC))
area = area.toFixed(2);
console.log(`A área desse triângulo escaleno é ${area}`)