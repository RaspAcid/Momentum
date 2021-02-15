// Elements
const date = document.getElementById('date'),
    time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    imageBtn = document.querySelector('.imageBtn'),
    quoteBtn = document.querySelector('.quoteBtn');

// Date
function showDate() {
    let today = new Date(),
    days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];
    weekday = days[today.getDay()];
    day = today.getDate(),
    months = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ];
    month = months[today.getMonth()];

    //Output Date
    date.innerHTML = `${weekday}<span>, </span>${day} ${month}`
}

// Time

let currentDate = new Date();
let firstTime = currentDate.getHours();
let currentHour;

function showTime() {
    let now = new Date(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();
    //currentHour = hour;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    currentHour = hour;
    if(currentHour !== firstTime) {
        firstTime = currentHour;
        currentHour++;
        document.body.style.backgroundImage = `url(${result[currentHour]})`;

    }
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Background & Greeting

// BG Image
const night = './assets/image/night/',
    morning = './assets/image/morning/',
    afternoon = './assets/image/afternoon/',
    evening = './assets/image/evening/';
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

var dayTime;
var today = new Date(),
    hour = today.getHours();
function setBgGreet() {
    if(hour < 6) {
        greeting.textContent = 'Доброй Ночи,'
    } else if(hour < 12) {
        greeting.textContent = 'Доброе Утро,'
    } else if(hour < 18) {
        greeting.textContent = 'Добрый День,'
    } else {
        greeting.textContent = 'Добрый Вечер,'
    }
    document.body.style.backgroundImage = `url(${result[hour]})`;
}

// Create array with BgImages
var result;
function createArr() {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    var arr = [];
    for(let i = 0; i < 6;) {
        let x = getRandomInt();
        if (arr1.includes(night+images[x])){
            i = i;
        } else {
            arr1.push(night+images[x]);
            i++;
        }
    }
    for(let i = 0; i < 6;) {
        let x = getRandomInt();
        if(arr2.includes(morning+images[x])){
            i = i;
        }else{
            arr2.push(morning+images[x]);
            i++;
        }
    }
    for(let i = 0; i < 6;){
        let x = getRandomInt();
        if(arr3.includes(afternoon+images[x])){
            i = i;
        }else{
            arr3.push(afternoon+images[x]);
            i++;
        }
    }
    for(let i = 0; i < 6;){
        let x = getRandomInt();
        if(arr4.includes(evening+images[x])){
            i = i;
        }else{
            arr4.push(evening+images[x]);
            i++;
        }
    }
    arr.push(arr1, arr2, arr3, arr4);
    result = [].concat(arr[0], arr[1], arr[2], arr[3]);
}

function getRandomInt(){
    return Math.floor(Math.random() * Math.floor(10));
}

// Change BgImage By Button
var y = 1;
function changeBg() {
    this.hour = hour;
    if((hour+y)<24) {
        document.body.style.backgroundImage = `url(${result[hour + y]})`;
        y++;
        imageBtn.disabled = true;
        setTimeout(function() {imageBtn.disabled = false}, 2000);
    } else {
        document.body.style.backgroundImage = `url(${result[0]})`;
        setTimeout(function() {imageBtn.disabled = false}, 2000);
        y = 1;
        hour = 0;
    }
  } 
imageBtn.addEventListener('click', changeBg);

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Введите Ваше Имя]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(x) {
    if(x.type === 'keypress') {
        if(x.which == 13 || x.keyCode == 13) {
            if (name.textContent === '' && localStorage.getItem('name') !== null) {
                name.textContent = localStorage.getItem('name');
            } else if(name.textContent === '') {
                name.textContent = '[Введите Ваше Имя]';
            }
            localStorage.setItem('name', x.target.innerText);
            name.blur();
        }
    } else {
        if (name.textContent === '') {
            if (localStorage.getItem('name') === null) {
                name.textContent = '[Введите Ваше Имя]';
            } else {
                name.textContent = localStorage.getItem('name');
            }
        }
        localStorage.setItem('name', x.target.innerText);
    }
}

// Clear Field
function clearName() {
    name.innerText = '';
}

function clearFocus() {
    focus.innerText = '';
}

function clearCity() {
    city.innerText = '';
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Введите Вашу Цель]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(x) {
    if(x.type === 'keypress') {
        if(x.which == 13 || x.keyCode == 13) {
            if (focus.textContent === '' && localStorage.getItem('focus') !== null) {
                focus.textContent = localStorage.getItem('focus');
            } else if(focus.textContent === '') {
                focus.textContent = '[Введите Вашу Цель]';
            }
            localStorage.setItem('focus', x.target.innerText);
            focus.blur();
        }
    } else {
        if (focus.textContent === '') {
            if (localStorage.getItem('focus') === null) {
                focus.textContent = '[Введите Вашу Цель]';
            } else {
                focus.textContent = localStorage.getItem('focus');
            }
        }
        localStorage.setItem('focus', x.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', clearName)
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', clearFocus);


// Quotes
const blockquote = document.querySelector('blockquote'),
    figcaption = document.querySelector('figcaption');

async function getQuote() {  
    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`,
    res = await fetch(url),
    data = await res.json(); 
    blockquote.textContent = data.quoteText;
    figcaption.textContent = data.quoteAuthor;
}

// Change Quote By Button

document.addEventListener('DOMContentLoaded', getQuote);
quoteBtn.addEventListener('click', getQuote);


// Weather
const weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    humidity = document.querySelector('.humidity'),
    windDir = document.querySelector('.windDir'),
    weatherDescription = document.querySelector('.weather-description'),
    city = document.querySelector('.city');

    // Get City
function getCity() {
    if(localStorage.getItem('city') === null) {
        city.textContent = '[Введите Ваш Город]';
        localStorage.setItem('city', city.textContent);
    } else {
        city.textContent = localStorage.getItem('city');
    }
}


var buffer = 'Санкт-Петербург';
function setCity(x) {
    if(x.type === 'keypress') {
        if(x.which == 13 || x.keyCode == 13) {
            if (city.textContent === '' && localStorage.getItem('city') !== null) {
                city.textContent = localStorage.getItem('city');
            }
            city.blur();
        }
    } else {
        if (city.textContent === '') {
            if (localStorage.getItem('city') === null) {
                city.textContent = '[Введите Ваш Город]';
            } else {
                city.textContent = localStorage.getItem('city');
            }
        }
        buffer = localStorage.getItem('city');
        localStorage.setItem('city', x.target.innerText);
        getWeather();
        city.blur;
    }
}


document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
city.addEventListener('click', clearCity);

async function getWeather() {
    try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=5ba900b7fd50eac27178d2cbb119bc0c&units=metric`,
    res = await fetch(url),
    data = await res.json(); 
      
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    //Wind Direction
    if (data.main) {
        var wind = data.wind.deg;
           if (wind >= 0 && wind<22.5) {
               wind = "северный";
               }
           if (wind >= 22.5 && wind < 67.5) {
               wind = "северо-восточный";
               }
           if (wind >= 67.5 && wind < 112.5) {
               wind = "восточный";
               }
           if (wind >= 112.5 && wind < 157.5) {
               wind = "юго-восточный";
               }
           if (wind >= 157.5 && wind < 202.5) {
               wind = "южный";
               }
           if (wind >= 202.5 && wind < 247.5) {
               wind = "юго-западный";
               }
           if (wind >= 247.5 && wind < 292.5) {
               wind = "западный";
               }
           if (wind >= 292.5 && wind < 337.5) {
               wind = "северо-западный";
               }
           if (wind > 337.5) {
               wind = "северный";
                }	

    }

    temperature.textContent = `${parseInt(data.main.temp)}°C`;
    humidity.textContent = `Влажность воздуха ${data.main.humidity}%`;
    windDir.textContent = `Ветер ${wind} ${parseInt(data.wind.speed)}м/с`;
    weatherDescription.textContent = data.weather[0].description;
    } catch(er) {
        if(city.textContent !== '[Введите Ваш Город]') {
            alert("Некорректное название города. Попробуйте снова.");
            city.textContent = buffer;
            localStorage.setItem('city', city.textContent);
            getWeather();
        }
    }   
}
    








// Run
showDate();
showTime();
createArr();
setBgGreet();
getName();
getFocus();
getCity();