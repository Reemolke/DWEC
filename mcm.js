const prompt = require("prompt-sync")();
function mcd(a, b) {
    return b === 0 ? a : mcd(b, a % b);
}
function mcm(a, b) {
    return (a * b) / mcd(a, b);
}
function mcmArray(arr) {
    let contador = 1;
    arr.forEach(element => {
        contador = mcm(contador, element)
    })
    return contador;
}
let input;
input = prompt('Inserta numeros separados por comas').split(',');
console.log(mcmArray(input)); 

