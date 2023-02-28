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

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// Functions returning functions

/* Cet exemple de code montre différentes façons de définir des fonctions 
qui retournent d'autres fonctions en JavaScript.

La première exemple, greet, est une déclaration de fonction normale où la 
fonction interne prend un argument appelé name. Il affiche ensuite une phrase 
à l'aide d'une interpolation de chaîne (${greeting} ${name}) où greeting est 
l'argument passé à la fonction externe et name est l'argument passé à la fonction interne. 
La fonction peut être appelée avec deux arguments de cette façon : greet("Hello")("John"). 
Cela entraîne Hello John étant affiché dans la console.

Le second exemple, greet2, fait la même chose que le précédent, mais utilise 
des flèches à la place. Les fonctions flèches sont plus simples à lire, mais 
produisent le même résultat.

Le troisième exemple, greetArr, simplifie encore les choses. Il nécessite seulement 
un argument, qui est passé à la fonction externe, et profite du retour implicite que 
les fonctions à flèche ont. Il peut être invoqué de cette façon : greetArr("Yow")("la cité"), 
entraînant « Yow la cité » étant affiché dans la console.

Enfin, les quelques lignes finales démontrent comment créer une variable (greeterHey) 
qui stocke le résultat de l’appel à greet("Hey"), ce qui rend possible d'appeler directement 
la variable avec un seul argument, greeterHey("John"). */

// créer une fonction qui prend un paramètre greeting et
// retourne une fonction qui prendra un paramètre name
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

// Utiliser la fonction greeter avec le paramètre 'Hey'
const greeterHey = greet("Hey");

// Appeler greeterHey avec les noms suivants en tant que paramètres
greeterHey("Jonas");
greeterHey("Steven");

// Appeler directement greet avec le paramètre 'Hello' et le nom Jonas
greet("Hello")("Jonas");

// La même chose en utilisant des fonctions fléchées
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

// Appeler greet2  avec le paramètre 'Hello' et le nom Eddy
greet2("Hello")("Eddy");

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// The call and apply Methods

/* Utilisation des méthodes call() et apply() en JavaScript
Le code fourni montre comment utiliser les méthodes call() et apply() en JavaScript. 
call() et apply() sont parmi les trois méthodes d'invocation disponibles lors de 
l'appel d'une fonction.

La méthode call() prend deux arguments : le argument this (la valeur de this à l'intérieur 
de la fonction appelée) et une liste optionnelle des paramètres pour que la fonction les utilise. 
Dans l'exemple ci-dessus, lufthansa.book est appelé avec call avec la valeur this définie 
comme eurowings, ce qui permet d'accéder aux mêmes données que lufthansa.

La méthode apply() prend également deux arguments - le this et un tableau des valeurs des 
paramètres - mais diffère du call() dans le sens où les paramètres doivent être mis dans 
un tableau avant de pouvoir être passés.

Dans l'exemple fourni, book est appelé avec apply sur l'objet swiss, en utilisant un tableau 
contenant le numéro de vol et le nom de la réservation. Il est ensuite appelé une fois de plus 
en utilisant l'opérateur spread (...) qui est essentiellement raccourci pour la méthode apply(). */

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");
