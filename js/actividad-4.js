
let PalabraUsuario = prompt("Escribe una palabra")


const vocales = ["a", "e", "i", "o", "u"]

let ContadorVocales = 0


for(let contador = 0; contador < PalabraUsuario.length; contador++ ) {

    for(let CantidadDeVocales = 0; CantidadDeVocales < vocales.length; CantidadDeVocales++){
        if(PalabraUsuario[contador].toLowerCase() === vocales[CantidadDeVocales]) {
            ContadorVocales++
            
        }
    }

}

document.write(`Tu palabra tiene ${ContadorVocales} vocales`)