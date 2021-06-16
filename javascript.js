var button = document.querySelector('#search')
var inputValue = document.querySelector('.inputValue')
var nameEl = document.querySelector('.name')
var date = document.querySelector('#date')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var windEl = document.querySelector('.wind')
var humidityEl = document.querySelector('.humidity')
var uvi = document.querySelector('.uvi')

//<div class="display"><h3 class="name" id="date"></h3>p 
//class="desc"></p><p class="temp"></p><p class="wind"></p>p class="humidity"></p>//

button.addEventListener('click', function () {

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=db9bce0f4ccb1ed7b6af7bfdde3ce83e&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.name)

            console.log(data.wind)

            nameEl.textContent = data.name
            temp.textContent = "Temp:" + data.main.temp + " F°"
            windEl.textContent = "Wind:" + data.wind.speed + "MPH"
            humidityEl.textContent = "Humidity:" + data.main.humidity + "%"

            //another fetch request here for UVI using lat and lon
            //lat and lon are given to me via the data object that we got from our original search
            fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=db9bce0f4ccb1ed7b6af7bfdde3ce83e`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    console.log(uvi)

                    uvi.textContent = "UV Index:" + data.current.uvi

                       fetch(`http://api.openweathermap.org/data/2.5/forecast?q=`+inputValue.value+`&appid=db9bce0f4ccb1ed7b6af7bfdde3ce83e`)
                       .then(response => response.json())
                       .then(data => {
                           console.log(data)

                })



            })

        })
})

if (window.localStorage) {
    var inputValue = document.querySelector('.inputValue');
    inputValue.value = localStorage.getItem(inputValue);
    inputValue.addEventListener('input', function () {
        localStorage.setItem('inputValue', inputValue.value);

    }, false);


}