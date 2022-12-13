let oLastModif = new Date(document.lastModified)
let day = oLastModif.getDate()
let month = oLastModif.getMonth() + 1
let year = oLastModif.getFullYear()
let sec = oLastModif.getSeconds()
let min = oLastModif.getMinutes()
let hour = oLastModif.getHours()
document.querySelector('.date').textContent = "Last Updated: " + month + "/" + day + "/" + year + " " + hour + ":" + min + ":" + sec


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);





const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humidity');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=a81f5584edea56a728450a5b8ed51dec&units=imperial';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}%</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }



  
const forecast = document.querySelector('.forecast')
const forecastt = document.querySelector('.forecastt')
const forecasttt = document.querySelector('.forecasttt')
const tday = document.querySelector('.tday')
const ttday = document.querySelector('.ttday')
const tttday = document.querySelector('.tttday')


const furl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=a81f5584edea56a728450a5b8ed51dec&units=imperial';


async function apiiFetch() {
    try {
      const response = await fetch(furl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        fdisplayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiiFetch();


  function fdisplayResults(forecastData) {
    tday.innerHTML = `<strong>${forecastData.list[3].dt_txt}</strong>`;
    forecast.innerHTML = `<strong>${forecastData.list[3].main.temp.toFixed(0)}&deg F</strong>`;
    ttday.innerHTML = `<strong>${forecastData.list[11].dt_txt}</strong>`;
    forecastt.innerHTML = `<strong>${forecastData.list[11].main.temp.toFixed(0)}&deg F</strong>`;
    tttday.innerHTML = `<strong>${forecastData.list[19].dt_txt}</strong>`;
    forecasttt.innerHTML = `<strong>${forecastData.list[19].main.temp.toFixed(0)}&deg F</strong>`;

    var dayname = new Date(value.dt * 1000).toLocaleDateString('en', { weekday: 'long', });

    const iconsrc = `https://openweathermap.org/img/w/${forecastData.forecast[0].icon}.png`;
    const desc = forecastData.forecast[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }




const requestURL = 'https://sheldonu.github.io/wdd230/Final-Project/project.json';

const fruit = document.querySelector('.fruit')

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
});


fruit.innerHTML = project[0].name









