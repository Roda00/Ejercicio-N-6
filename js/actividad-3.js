let NumeroUsuario = +prompt(`Ingresa un numero del 1 al 100`)

for (let TablaDeMultiplicar = 1; TablaDeMultiplicar <= 1000; TablaDeMultiplicar++){

    if (NumeroUsuario * TablaDeMultiplicar >= 1000)
        break
    document.write(NumeroUsuario * TablaDeMultiplicar + `<br>`)
}