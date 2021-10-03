let = frase = prompt("Ingrese una frase");

let = index = 0

const vocalA = "a"
const vocalE = "e"
const vocalI = "i"
const vocalO = "o"
const vocalU = "u"

console.log(frase);
console.log(frase.length);

do{
    if(frase.charAt(index) == vocalA || frase.charAt(index) == vocalE || frase.charAt(index) == vocalI || frase.charAt(index) == vocalO || frase.charAt(index) == vocalU)
    document.write(frase.charAt(index))
    index++;
}while(index <= frase.length);

