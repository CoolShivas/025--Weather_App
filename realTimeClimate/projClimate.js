import readline from "readline/promises";


const lineReader = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


// // // Open weather map Api's details :-
const API_Key = `3aa94f962094ae7c82dcebf7d91b85e0`;
const Base_URL = `https://api.openweathermap.org/data/2.5/weather`;


const getWeather = async (city) => {
    const url = `${Base_URL}?q=${city}&appid=${API_Key}&units=metric`;

    try {
        const response = await fetch(url);
        if(!response.ok)
        {
            throw new Error(`City not found. Please check the city name.`);
        }
        else
        {
            const weatherData = await response.json();
            console.log(weatherData);
            // // // Here, we are getting the Output on Terminal as :- 
            // // // Getting the whole data from server;
        }
    } catch (err) {
        console.log(err);
    }
};

const city = await lineReader.question(`Enter a city name to get its weather : `);
await getWeather(city);
lineReader.close();