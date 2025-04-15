function inverterString(texto) {
    return texto.split('').reverse().join('');
}

let palavra = "PoliAna";
let palavraInvertida = inverterString(palavra);

console.log(palavraInvertida); 
