const prompt = require("prompt-sync")();
const alvo = (Math.floor(Math.random() * 10));
let palpite = 0;
function darDica(palpite, alvo) {
    if (palpite === alvo){ return "Acertou!";    
    }
    else if(palpite > alvo) {return "O numéro é menor que seu palpite.";
    }
    else return "O número é maior que seu palpite";
}
while (palpite !== alvo) {
    palpite = Number(prompt("Palpite: "));
    console.log(darDica(palpite, alvo));
}
//*Arrow Function
//* const darDica = (palpite, alvo) => palpite === alvo ? "Acertou!" : palpite > alvo ? "É menor." : "É maior.";
