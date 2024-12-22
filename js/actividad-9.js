

const NumeroUsuario = +prompt("Ingresá un numero entero positivo")

let StringNumero = NumeroUsuario + ""
let digitos = ""

for(i = StringNumero.length - 1; i >= 0 ; i--) {


    digitos += StringNumero[i]

}


document.write(`Numero final invertido: ${digitos}`)
