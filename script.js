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
