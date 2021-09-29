let numero1 = parseInt(prompt("Ingrese un primer número"));
let numero2 = parseInt(prompt("Ingrese un segundo número"));
let numero3 = parseInt(prompt("Ingrese un tercer número"));

console.log(numero1);
console.log(numero2);
console.log(numero3);

if(numero1 > numero2 && numero1 > numero3){
    document.write("El primer número es más grande "+ numero1)
}else if(numero2 > numero1 && numero2 > numero3){
    document.write("El segundo número es más grande "+ numero2)
}else if(numero3 == numero1 && numero3 == numero2){
    document.write("Todos los número son iguales")
}else{
    document.write("El tercer número es más grande "+ numero3)
}

