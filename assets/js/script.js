let apiKey = "feaa8b1d4d25106844878c22085c20a6";
let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=${apiKey}`

fetch(queryUrl)
.then(headers => headers.json())
.then(weatherData => {
    console.log(weatherData);
})
