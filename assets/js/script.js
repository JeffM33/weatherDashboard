let apiKey = "feaa8b1d4d25106844878c22085c20a6";
let city = document.getElementById("city");
let date = document.getElementById("date");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let uvIndex = document.getElementById("uvIndex");
let day1 = document.getElementById("day1");

var searchButton = document.getElementById("searchButton");

searchButton.onclick = searchB;

function searchB(){
        let cityInput = document.getElementById("cityInput").value;
        console.log(cityInput);
        // Call api to find city from weather api and fill out data. 
        getCords(cityInput);

}

function getCords(cityInput){
    let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`

    fetch(queryUrl)
    .then(headers => headers.json())
    .then(weatherData => {
        //console.log(weatherData);
        getWeather(weatherData.city.coord.lat, weatherData.city.coord.lon);
    })

}

// review order 
function getWeather(lat, lon) {
    let queryUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`

    fetch(queryUrl2)
        .then(headers => headers.json())
        .then(weatherData => {
            console.log(weatherData);
            var card = document.createElement("div");
            var cardBody = document.createElement("div");
            var cityName = document.createElement("h3");
            var temp = document.createElement("p");
            var wind = document.createElement("p");
            var humid = document.createElement("p");
            var uv = document.createElement("p");
            card.setAttribute("class", "card");
            cardBody.setAttribute("class", "card-body");

            temp.textContent = `Temp: ${weatherData.current.temp}`;
            wind.textContent = `Wind speed: ${weatherData.current.wind_speed}`;
            humid.textContent = `Humidity: ${weatherData.current.humidity}`;
            uv.textContent = `UV Index: ${weatherData.current.uvi}`;
            
            // Make sure everything is appended
            card.append(cardBody);
            cardBody.append(temp, wind, humid, uv);
            day1.innerHTML = "";
            day1.append(card);

    })

}

// created standard buttons to call certain cities
document.getElementById("dallas").addEventListener("click", function() {
    getCords("dallas");
}); 
document.getElementById("austin").addEventListener("click", function() {
    getCords("austin");
}); 
document.getElementById("houston").addEventListener("click", function() {
    getCords("houston");
}); 
document.getElementById("sanAntonio").addEventListener("click", function() {
    getCords("San Antonio");
}); 
document.getElementById("oklahomaCity").addEventListener("click", function() {
    getCords("Oklahoma City");
}); 
document.getElementById("durant").addEventListener("click", function() {
    getCords("Durant");
}); 