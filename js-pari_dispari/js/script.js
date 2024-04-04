// CHIEDO PARI O DISPARI
let userChoice;
let evenOrOdd;

do {
    // RICHIESTA
    userChoice = prompt ("Pari o dispari?").toLowerCase();
    // SE PARI ALLORA CAMBIA LA VARIABILE
    if (userChoice === "pari") {
        evenOrOdd = true;
        // TRUE = PARI
    // SE DISPARI ALLORA CAMBIA LA VARIABILE   
    } else if (userChoice === "dispari"){
        evenOrOdd = false;
        // FALE = DISPARI
    // SE ALTRO ALLORA ALERT   
    } else {
        alert("Non hai inserito la parola giusta!");
    }
    // CONTINUA A CHIEDERE FINCHé NON INSERISCO PARI O DISPARI
} while (userChoice !== "pari" && userChoice !== "dispari" )

console.log("Hai scelto " + userChoice);
// console.log(evenOrOdd);

// CHIEDO UN NUMERO DA 1 a 5
let userNum;
do {
    // RICHIESTA
    userNum = parseInt(prompt("Dimmi un numero da 1 a 5?"));
    // SE NON é FRA 1 E 5 ALLORA ALERT
    if (userNum < 1 || userNum > 5) {
        alert("Questo non è un numero fra 1 e 5!");
    } 
    // SE IL VALORE é MINORE DI 1 O MAGGGIORE DI 5 ALLORA CONTINUA
} while (userNum < 1 || userNum > 5);

console.log("Hai scelto il numero " + userNum);

// SOMMO IL NUMERO UTENTE A QUELLO RANDOM
const rndmNum = (pcNum(1, 5))
const sumTotal = sum (userNum, rndmNum);
console.log("Il pc ha scelto il numero " + rndmNum);
console.log("La somma è " + sumTotal);

// DECIDO CHI HA VINTO
if (sumTotal % 2 === 0 && (evenOrOdd === true)) {
    console.warn(`Hai vinto ${sumTotal} è pari!`);
    // HAI VINTO SE SOMMA PARI E HAI SCELTO PARI
}   else if (sumTotal % 2 !== 0 && (evenOrOdd === false)){
    console.warn(`Hai vinto ${sumTotal} è dispari!`);
    // HAI VINTO SE SOMMA DISPARI E HAI SCELTO DISPARI
}   else if (sumTotal % 2 === 0 && (evenOrOdd === false)) {
    console.warn(`Hai perso ${sumTotal} è pari hai scelto dispari!`);
    // HAI PERSO SE SOMMA PARI MA HAI SCELTO DISPARI
}   else if (sumTotal % 2 !== 0 && (evenOrOdd === true)) {
    console.warn(`Hai perso ${sumTotal} è dispari hai scelto pari!`);
    // HAI PERSO SE SOMMA DISPARI MA HAI SCELTO PARI
}