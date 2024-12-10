
/*
let monCanard = "donald";
const nombreDePâtes = "2";
const nombreDAile = "2";
 
 
 function canard(nombreDePâtes,nombreDAile){
    let maCanette = "daisy";
    let mesCanards = maCanette += monCanard;
   /*   return mesCanards;  */
/*   return nombreDePâtes += nombreDAile;  */
/* }
console.log(canard(nombreDePâtes,nombreDAile));
console.log((canard(2,1)));
 
function canard1(nombreDePâtes1,nombreDAile1){
    let monCanard1 = nombreDePâtes1 += nombreDAile1;
    return monCanard1;
}
console.log(canard1(2,2)) */
 
/* let x ='1';
 
function f (){
    let x = 2;
    console.log(x);
}
console.log(x);
f() 
 
const lettre = "ABCDEFGHJKLMNPQRSTUVWXY";
const nombre = "0123456789";
 */
 
 
/* function generePlaque(){
for (i = 0; i < 2; i++) {
    plaque += lettre.charAt(Math.floor(Math.random() * (lettre.length)))
}
plaque += "-";
/* console.log(plaque); */
 
/* for (i = 0; i < 3; i++) {
    plaque += nombre.charAt(Math.floor(Math.random() * (nombre.length)))
}
plaque += "-"; */
/* console.log(plaque); */
 
/* for (i = 0; i < 2; i++) {
    plaque += lettre.charAt(Math.floor(Math.random() * (lettre.length)))
}
 return plaque;
}
console.log(generePlaque()); */


 /*
function genereLetter(){
    let plaque = "";
    for (i = 0; i < 2; i++) {
        plaque += lettre.charAt(Math.floor(Math.random() * (lettre.length)))
    }
    return plaque;
}
//console.log(genereLetter())
 
function genereNumber(){
    let plaque = "-";
    for (i = 0; i < 3; i++) {
        plaque += nombre.charAt(Math.floor(Math.random() * (nombre.length)))
    }
    return plaque += "-";
   
  
}
//plaque += "-";
 
function genererPlaque(){
    let i = 51;
    while ( i >0)
    {
        console.log(genereLetter() + genereNumber() + genereLetter());
        i--;
        console.log(i);
    }
}

genererPlaque();
*/

 
/*  function genererPlaque1(){
    let i = 0;
    while ( i <50)
    {
        console.log(genereLetter() + genereNumber() + genereLetter());
        i++;
        console.log(i);
    }
}
genererPlaque1();*/

function calculerTarif(age, anneesPermis, accidents, fidelite) {
    let tarif = "";

    // Cas des jeunes conducteurs avec peu d'expérience
    if (age < 25 && anneesPermis < 2) {
        if (accidents === 0) {
            tarif = "D"; 
        } else {
            return "Refusé"; 
        }
    } 

    // Cas des conducteurs jeunes mais plus expérimentés ou conducteurs plus âgés et débutants
    else if ((age < 25 && anneesPermis >= 2) || (age >= 25 && anneesPermis < 2)) {
        if (accidents === 0) {
            tarif = "C"; 
        } else if (accidents === 1) {
            tarif = "D"; 
        } else {
            return "Refusé"; 
        }
    } 
    // Cas des conducteurs plus âgés et expérimentés
    else if (age >= 25 && anneesPermis >= 2) {
        if (accidents === 0) {
            tarif = "B"; 
        } else if (accidents === 1) {
            tarif = "C"; 
        } else if (accidents === 2) {
            tarif = "D"; 
        } else {
            return  "Refusé"; 
        }
    }

    // Réduction de tarif pour fidélité
    if (fidelite > 1) {
        if (tarif === "D") tarif = "C";
        else if (tarif === "C") tarif = "B";
        else if (tarif === "B") tarif = "A";
    }

    // Retourner tarif final
    return tarif; 
}

// Gestionnaire d'événements pour le bouton de calcul
document.getElementById("calculer").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche la page de se rafraîchir

    // Récupération des valeurs saisies
    let age = parseInt(document.getElementById("age").value);
    let anneesPermis = parseInt(document.getElementById("anneesPermis").value);
    let accidents = parseInt(document.getElementById("accidents").value);
    let fidelite = parseInt(document.getElementById("fidelite").value);
    
    // Appel de la fonction de calcul
    let tarifFinal = calculerTarif(age, anneesPermis, accidents, fidelite);

    // Affichage du résultat
    let resultat = document.getElementById("resultat");
    resultat.textContent = "Tarif final attribué : " + tarifFinal;
});
