let apiKey = "feaa8b1d4d25106844878c22085c20a6";
let city = document.getElementById("city");
let date = document.getElementById("date");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let uvIndex = document.getElementById("uvIndex");
let day1 = document.getElementById("day1");
let day2 =document.getElementById("day2");
let day3 =document.getElementById("day3");
let day4 =document.getElementById("day4");
let day5 =document.getElementById("day5");

var searchButton = document.getElementById("searchButton");

searchButton.onclick = searchB;

function searchB(){
        let cityInput = document.getElementById("cityInput").value;
        console.log(cityInput);
        // Call api to find city from weather api and fill out data. 
        getCords(cityInput);

}

function getCords(cityInput){
    let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&appid=${apiKey}`
    

    fetch(queryUrl)
    .then(headers => headers.json())
    .then(weatherData => {
        console.log(weatherData);
        getWeather(weatherData.city.coord.lat, weatherData.city.coord.lon);
    })

    for(i = 2; i > 34 ; i + 8){
        var card = document.createElement("div");
        var cardBody = document.createElement("div");
        var cityName = document.createElement("h3");
        var temp = document.createElement("p");
        var wind = document.createElement("p");
        var humid = document.createElement("p");
        var uv = document.createElement("p");
        if (i === 2) {
            card.setAttribute("class", "card");
            cardBody.setAttribute("class", "card-body");

            temp.textContent = `City Name: ${weatherData.cityName}`;
            temp.textContent = `Temp: ${weatherData.list[i].main.temp}`;
            wind.textContent = `Wind speed: ${weatherData.list[i].wind.speed}`;
            humid.textContent = `Humidity: ${weatherData.list[i].main.humidity}`;

            card.append(cardBody);
            cardBody.append(cityName, temp, wind, humid);
            day2.innerHTML = "";
            day2.append(card);

        } else if (i === 10) {
            card.setAttribute("class", "card");
            cardBody.setAttribute("class", "card-body");

            temp.textContent = `City Name: ${weatherData.cityName}`;
            temp.textContent = `Temp: ${weatherData.list[i].main.temp}`;
            wind.textContent = `Wind speed: ${weatherData.list[i].wind.speed}`;
            humid.textContent = `Humidity: ${weatherData.list[i].main.humidity}`;

            card.append(cardBody);
            cardBody.append(cityName, temp, wind, humid);
            day3.innerHTML = "";
            day3.append(card);

        } else if (i === 18) {
            card.setAttribute("class", "card");
            cardBody.setAttribute("class", "card-body");

            temp.textContent = `City Name: ${weatherData.cityName}`;
            temp.textContent = `Temp: ${weatherData.list[i].main.temp}`;
            wind.textContent = `Wind speed: ${weatherData.list[i].wind.speed}`;
            humid.textContent = `Humidity: ${weatherData.list[i].main.humidity}`;

            card.append(cardBody);
            cardBody.append(cityName, temp, wind, humid);
            day4.innerHTML = "";
            day4.append(card);

        } else if (i === 26) {
            card.setAttribute("class", "card");
            cardBody.setAttribute("class", "card-body");

            temp.textContent = `City Name: ${weatherData.cityName}`;
            temp.textContent = `Temp: ${weatherData.list[i].main.temp}`;
            wind.textContent = `Wind speed: ${weatherData.list[i].wind.speed}`;
            humid.textContent = `Humidity: ${weatherData.list[i].main.humidity}`;

            card.append(cardBody);
            cardBody.append(cityName, temp, wind, humid);
            day5.innerHTML = "";
            day5.append(card);

        } else {
            card.setAttribute("class", "card");
            cardBody.setAttribute("class", "card-body");

            temp.textContent = `City Name: ${weatherData.cityName}`;
            temp.textContent = `Temp: ${weatherData.list[i].main.temp}`;
            wind.textContent = `Wind speed: ${weatherData.list[i].wind.speed}`;
            humid.textContent = `Humidity: ${weatherData.list[i].main.humidity}`;

            card.append(cardBody);
            cardBody.append(cityName, temp, wind, humid);
            day6.innerHTML = "";
            day6.append(card);
        }
    }

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

            temp.textContent = `City Name: ${weatherData.current.cityName}`;
            temp.textContent = `Temp: ${weatherData.current.temp}`;
            wind.textContent = `Wind speed: ${weatherData.current.wind_speed}`;
            humid.textContent = `Humidity: ${weatherData.current.humidity}`;
            uv.textContent = `UV Index: ${weatherData.current.uvi}`;
            
            // Make sure everything is appended
            card.append(cardBody);
            cardBody.append(cityName, temp, wind, humid, uv);
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