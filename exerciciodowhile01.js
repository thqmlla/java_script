import rl from 'readline-sync';


const numeroAleatorio = Math.floor(Math.random() * 100) + 1;


let tentativa;


do {
    
    tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ");

    
    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }

    
} while (tentativa !== numeroAleatorio);