
const ListaDePalabras = prompt("Ingresa una lista de palabras separadas por comas") + ","

let PalabraActual = "" 

let Palabras = "" 

let Comparacion1 = ""

let Comparacion2 = ""

let PalabrasPalindromas = ""

let UltimaPalabra = ""


for(let i = 0; i <= ListaDePalabras.length - 1; i++) {

    Palabras += ListaDePalabras[i]

    if(ListaDePalabras[i] === ",") { 

        PalabraActual += Palabras.trim()

        for(let j = 0; j <= PalabraActual.length - 2; j++) {

            Comparacion1 += PalabraActual[j]
        }
        
        for(let k = PalabraActual.length - 2; k >= 0; k--) {

            Comparacion2 += PalabraActual[k]

        }

        if (Comparacion1.toLowerCase() === Comparacion2.toLowerCase()) {

            PalabrasPalindromas += Comparacion1 + ", "
            
        } 
        Comparacion1 = ""
        Comparacion2 = ""
        PalabraActual = ""
        Palabras = ""
        
    }
}


document.write(`Estas palabras son palíndromas: ${PalabrasPalindromas.slice(0, -2)}`)




