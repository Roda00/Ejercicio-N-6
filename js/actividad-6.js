const filas = +prompt("Ingresa la cantidad de filas de asteriscos")

for(let i = filas; i > 0; i--) {

    let asteriscos = ""
    
    for(let CantDeAsteriscos = 0; CantDeAsteriscos < i; CantDeAsteriscos++)

        asteriscos += "*"

        console.log(asteriscos)

}
    


