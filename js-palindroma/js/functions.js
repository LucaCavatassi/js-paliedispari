/**
 * Description controlla la parola scomponendola in un array, mettendola al contrario e poi controllandola.
 * @param {string} -- la parola
 * @returns {string} -- è palindroma o meno 
 */
function wordChecker (string){
    // CONVERTO IN UN ARRAY LE LETTERE DI UNA PAROLA
    const array = string.split("");
    console.log(array);
    // REVERSO L'ARRAY IN MODO TALE DA AVERE LE LETTERE AL CONTRARIO
    const arrayReverse = array.reverse();
    console.log(arrayReverse);
    // //  LO RICONVERTO IN STRINGA USANDO JOIN PER ELIMINARE LE VIRGOLE
    const reverseString = arrayReverse.join("");
    console.log(reverseString);

    // SE LA STRINGA ORIGINALE é UGUALE A QUELLA REVERSE ALLORA é PALINDROMO ALTRIMENTI NO
    if (string === reverseString){
        console.warn("È un palindromo!");
    }   else {
        console.warn("Non é un palindromo!");
    }
}
// console.log(wordChecker("fabio"));   