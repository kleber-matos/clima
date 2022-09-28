// Variaveis e seleção de elementos
const apikey = "3cc452cafe1479c001d692c15a5939db";
const apiConutry = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector('#city-input');
const seachBtn = document.querySelector('#seach');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');

const wetherData = document.querySelector('#wether-data');

// Funções
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText= parseInt(data.main.temp);
    descElement.innerText= data.weather[0].description; 
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiConutry + data.sys.country);
    humidityElement.innerText= `${data.main.humidity}%`
    windElement.innerText= `${data.wind.speed}km/h`

    wetherData.classList.remove('hide');
};



// Eventos
seachBtn.addEventListener("click", (e)=>{

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city)

});


cityInput.addEventListener("keyup", (e) => {

    if (e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city)
    }

})