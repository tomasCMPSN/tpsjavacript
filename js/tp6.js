let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

if(numero1 > numero2){
    document.write("El primer número es el mas grande "+ numero1)
}else{
    if(numero1 == numero2){
        document.write("Los números son iguales")
    }else{
        document.write("El segundo número es el mas grande "+ numero2)
    }
}