function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    if (b === numero) {
        return true; 
    } else {
        return false; 
    }
}

import entradaDados from 'readline-sync';
let numero = entradaDados.question ("Informe o número: ");
if (verificaFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
