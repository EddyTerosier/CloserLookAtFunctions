"use strict";

// DEFAULT PARAMETERS

/* Le code déclare une fonction appelée createBooking qui prend 
en paramètre trois arguments : flightNum, numPassengers et price. 
La fonction crée ensuite un objet avec ces 3 propriétés et l'affiche 
dans la console avant de le pousser dans un tableau appelé bookings.

Le second paramètre, numPassengers, est par défaut à 1 si non précisé. 
De même, le troisième paramètre, price, est mis à 199 * numPassengers 
par défaut s'il n'est pas spécifié.

Le code appelle la fonction createBooking quatre fois avec différentes 
combinaisons d'arguments. Dans la dernière invocation, nous fournissons 
seulement une valeur pour flightNum et nous laissons les deux autres paramètres 
à leurs valeurs par défaut, i.e. undefined. Cet appel sera équivalent à 
celui-ci : createBooking("LH123", 1, 199); 
où numPassengers et price sont calculés à partir de leurs valeurs par défaut. */

// Initialize an empty array to store bookings
const bookings = [];

// Create a function called createBooking that accepts three parameters, with the last two having default values.
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    // ES5 Syntax (used before ES6):
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    // Create a booking object with the provided or default parameters
    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    // Print the booking object to the console
    console.log(booking);

    // Add the booking object to the bookings array
    bookings.push(booking);
};

// Call the createBooking function with different sets of arguments to test its behavior
createBooking("LH123"); // prints {flightNum: "LH123", numPassengers: 1, price: 199} and adds the object to the bookings array
createBooking("LH123", 2, 800); // prints {flightNum: "LH123", numPassengers: 2, price: 800} and adds the object to the bookings array
createBooking("LH123", 2); // prints {flightNum: "LH123", numPassengers: 2, price: 199} and adds the object to the bookings array
createBooking("LH123", 5); // prints {flightNum: "LH123", numPassengers: 5, price: 199} and adds the object to the bookings array
createBooking("LH123", undefined, 1000); // prints {flightNum: "LH123", numPassengers: 1, price: 1000} and adds the object to the bookings array (using undefined as a placeholder for the second argument)

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// How passing arg works: Value vs reference

/* Cet exemple de code montre comment le passage d'une valeur, 
comme un type de données primitif - dans ce cas "LH234" en tant 
que variable flight - fonctionne différemment du passage d'une référence, 
telle qu'un objet avec des propriétés telles que jonas dans l'exemple ci-dessous.

Lors du passage d'une valeur, la fonction prendra une copie de cette valeur 
et les modifications apportées à celle-ci n'affecteront pas la variable originale 
en dehors de la fonction. Cela s'appelle « passer par valeur ».

Lorsqu'une référence est passée, la fonction prendra une référence (un pointeur) à 
l'objet original et les modifications apportées à celui-ci dans le corps de la fonction 
seront reflétées dans la copie originale de l'objet en dehors de la fonction. 
Cela s'appelle « passer par référence ».

Dans l'exemple, nous voyons les deux techniques utilisées. Le numéro de vol est transmis 
sous forme de chaîne standard et ensuite modifié dans le corps de la fonction, 
mais étant donné que les chaînes sont un type de données primitives, la valeur originale 
reste inchangée en dehors du corps de la fonction.

Cependant, l'objet jonas est passé par référence. Lorsque la fonction modifie la propriété nom, 
elle affecte l'objet original dans le contexte global, et les changements sont visibles en dehors 
du corps de la fonction. De plus, le numéro de passeport est généré aléatoirement à l'aide d'une 
nouvelle fonction de passeport, où l'objet jonas est passé par référence et donc les changements 
dans la propriété passeport sont également visibles dans le contexte global. */

// Déclaration de la variable flight avec la valeur 'LH234'
const flight = "LH234";

// Déclaration d'un objet jonas avec deux propriétés : name et passport
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 24739479284,
};

// Déclaration d'une fonction checkIn avec deux paramètres : flightNum et passenger
const checkIn = function (flightNum, passenger) {
    // La valeur de flightNum est changée à 'LH999'
    flightNum = "LH999";
    // La propriété name de l'objet passenger est modifiée en ajoutant 'Mr. ' au début
    passenger.name = "Mr. " + passenger.name;

    // Vérification que le numéro de passeport du passager correspond à la valeur attendue
    if (passenger.passport === 24739479284) {
        console.log("Checked in");
    } else {
        console.log("Wrong passport!");
    }
};

// Appel de la fonction checkIn avec les arguments flight et jonas
// checkIn(flight, jonas);

// Affichage de la valeur de la variable flight dans la console
// console.log(flight);

// Affichage de l'objet jonas dans la console
// console.log(jonas);

// La partie suivante est un commentaire qui explique ce qui se passe dans le code ci-dessus
// C'est la même chose que de faire...
// const flightNum = flight;
// const passenger = jonas;

// Déclaration d'une fonction newPassport avec un paramètre person
const newPassport = function (person) {
    // La propriété passport de l'objet person est modifiée avec une valeur aléatoire entre 0 et 100000 (arrondie à l'entier inférieur)
    person.passport = Math.trunc(Math.random() * 100000);
};

// Appel de la fonction newPassport avec l'objet jonas comme argument
newPassport(jonas);

// Appel de la fonction checkIn avec les arguments flight et jonas (qui a maintenant un nouveau numéro de passeport)
checkIn(flight, jonas);

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// Fonctions accepting Callback Functions

/* Ce code illustre comment utiliser des fonction callback en JavaScript. 
La fonction transformer() est une fonction de haut niveau - elle prend en 
compte deux arguments, la chaîne et une fonction callback. Cette fonction 
exécutera alors la fonction callback donnée sur la chaîne, retournant une 
version transformée de l'argument d'entrée.

Les fonctions oneWord() et upperFirstWord() sont toutes deux des fonctions callback. 
Dans cet exemple, upperFirstWord() mettra en majuscule le premier mot de la chaîne d'entrée, 
tandis que oneWord() transformera la chaîne complète en un mot en minuscules (en remplaçant tous les espaces par rien).

Enfin, high5() est un autre exemple de callback qui sera exécuté à plusieurs reprises, 
par exemple dans une boucle. Dans ce cas particulier, lorsque le corps du document est 
cliqué ou lorsqu’un tableau de noms est itéré dans une boucle, la fonction callback high5() est invoquée. */

// Cette fonction prend une chaîne de caractères et renvoie une version en minuscules sans espaces
const oneWord = function (str) {
    return str.replaceAll(" ", " ").toLowerCase();
};

// Cette fonction prend une chaîne de caractères et renvoie une version avec le premier mot en majuscule pour chaque mot
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// Cette fonction prend une chaîne de caractères et une fonction de transformation, applique la fonction de transformation à la chaîne de caractères, puis affiche la chaîne de caractères d'origine, la chaîne transformée et le nom de la fonction de transformation utilisée
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transform string ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

// Applique la fonction upperFirstWord à la chaîne de caractères 'JavaScript is the best!' et affiche le résultat
transformer("JavaScript is the best!", upperFirstWord);

// Applique la fonction oneWord à la chaîne de caractères 'JavaScript is the best!' et affiche le résultat
transformer("JavaScript is the best!", oneWord);

// Déclare une fonction high5 qui affiche un emoji "rock on" dans la console
const high5 = function () {
    console.log("🤟");
};

// Attache la fonction high5 à l'événement click du corps du document, de sorte que chaque clic sur le corps du document affiche l'emoji "rock on" dans la console
document.body.addEventListener("click", high5);

// Applique la fonction high5 à chaque élément du tableau ['Jonas', 'Martha', 'Adam'], de sorte que chaque élément affiche l'emoji "rock on" dans la console
["Jonas", "Martha", "Adam"].forEach(high5);