
const NumeroAleatorio = parseInt(Math.random() * 10) + 1

console.log(NumeroAleatorio)

let NumeroUsuario = +prompt("Adivina el numero, Ingresa un numero del 1 al 10")




while (NumeroUsuario !== NumeroAleatorio ) {

    if (NumeroUsuario < NumeroAleatorio) {
        NumeroUsuario = +prompt("El numero ingresado es MENOR al numero que tenes que adivinar, Ingresa otro")
    } else if (NumeroUsuario > NumeroAleatorio) {
        NumeroUsuario = +prompt("El numero ingresado es MAYOR al numero que tenes que adivinar, Ingresa otro")
    }
}

if (NumeroUsuario === NumeroAleatorio){
    document.write("Felicidades, ese era el numero")
}