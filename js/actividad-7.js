
for(let numeros = 1; numeros <= 50; numeros++) {

        let listaDeNumeros = numeros
        
        if (numeros % 5 === 0 && numeros % 3 === 0) {
            listaDeNumeros += ` FizzBuzz `
        } else if (numeros % 3 === 0) {
            listaDeNumeros += ` Fizz `
        } else if (numeros % 5 === 0) {
            listaDeNumeros += ` Buzz `
        } 
        document.write(listaDeNumeros + `<br>`)
}
