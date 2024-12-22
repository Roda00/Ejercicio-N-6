const Numeros = [23, 45, 12, 67, 34, 89, 21]

let NumeroMayor = 0

for(let ContadorDeNumeros = 0; ContadorDeNumeros < Numeros.length; ContadorDeNumeros++ ) {

    if (Numeros[ContadorDeNumeros] > NumeroMayor) {

        NumeroMayor = Numeros[ContadorDeNumeros]
    }
}

document.write(`El numero mayor del array es ${NumeroMayor}`)