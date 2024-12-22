

const ArrayEdades = [18, 25, 14, 32, 16, 40]

for(i = 0; i <= ArrayEdades.length - 1; i++) {

    if (ArrayEdades[i] >= 18) {
        document.write(`Mayores de edad: ${ArrayEdades[i]} <br> `)
    } else if (ArrayEdades[i] < 18) {
        document.write(`Menores de edad: ${ArrayEdades[i]} <br> `)
    }
}