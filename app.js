var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=// Enter OpenWeatherMapKey')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            console.log(typeof (descValue))
            var tempr = Number(tempValue) - 273
            var fintemp = tempr.toFixed(2)
            console.log(temp)
            main.innerHTML = nameValue;
            desc.innerHTML = "Description - " + descValue;
            temp.innerHTML = "Temperature - " + String(fintemp) + "℃";
            input.value = "";

        })

        .catch(err => alert("Wrong city name!"));
})