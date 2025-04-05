import readline from "readline/promises";


const lineReader = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


// // // Open weather map Api's details :-
const API_Key = `3aa94f962094ae7c82dcebf7d91b85e0`;
const Base_URL = `https://api.openweathermap.org/data/2.5/weather`;



const city = await lineReader.question(`Enter a city name to get its weather : `);
lineReader.close();

// // // Here, we are getting the Output on Terminal as :-
// // // Enter a city name to get its weather : guna
// // // Completed running 'projClimate.js'