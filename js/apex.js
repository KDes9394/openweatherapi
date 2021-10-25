const key=f1caee44d38adca2698c280ef71637a7
const getCity = async (city) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const data = await result.json();
    const myCityDetails = {
        name: data.name,
        forecast: data.weather[0].main,
        forecast_description: data.weather[0].description,
        currentTemperature: (data.main.temp-273.15),
        
        highTemp: (data.main.temp_max),
        
        lowTemp: (data.main.temp_min),
        
        humidity: data.main.humidity
    }

    return myCityDetails
}
const siteElements = {
    weatherDetails: '.weather-infos'
};

const createList = (name, forecast, forecast_description, currentTemperature, lowTemp, highTemp, humidity) => {
    console.log(forecast);
    const html = 
    `<div class='containerS' id='${name.toLowerCase()}'><ul class='container defaults>`,
        `<li><h4>${name}</h4></li>`,
        `<li><h5>${forecast}</h5></li>`,
        `<li>Weather forecast prediction: ${forecast_description}</li>`,
        `<li>Current Temp: ${currentTemperature}Deg Celsius</li>`,
        `<li>Predicted Lows: ${lowTemp}Deg Celsius</li>`,
        `<li>Predicted Highs: ${highTemp}Deg Celsius</li>`,
        `<li>Predicted Humidity: ${humidity}%</li>`,
        `<button type="button" class="btn-close btn-close-white close-btn" onclick="deleteSelf('${name.toLowerCase()}')" aria-label="Close"></button>`,
    document.insertAdjacentHTML('beforeend', html).querySelector(siteElements.weatherDetails);
};
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let cityValue = event.path[0][0].value;
    loadData(cityValue);
});
const loadData = async (name) => {
    const displayAnswer = await getCity(name);
    createList(displayAnswer.name, displayAnswer.forecast, displayAnswer.forecast_description, displayAnswer.currentTemperature, displayAnswer.lowTemp, displayAnswer.highTemp, displayAnswer.humidity);
}
const form = document.querySelector('#qCityDb');
}