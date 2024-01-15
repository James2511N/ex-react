const url = 'https://api.weatherapi.com/v1/current.json?key=bc74af25c586465fa15150749231910';
let city;

async function checkWeather(name = "Kyiw", date = new Date()) {
    const response = await fetch(url + `&q=` + name + `&dt=` + date);
    var data = await response.json();
    console.log(data);
    document.getElementById("country").innerHTML = data.location.country;
    document.getElementById("time").innerHTML = data.location.localtime;
    document.getElementById("city").innerHTML = data.location.name;
    document.getElementById("image").src = data.current.condition.icon;
    document.getElementById("temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.getElementById("condition").innerHTML = data.current.condition.text;
    document.getElementById("feelslike").innerHTML = "Reaf feel: " + data.current.feelslike_c + "°C";
    document.getElementById("wind").innerHTML = "Wind Gusts: " + data.current.wind_kph + " km/h";
    document.getElementById("pressure").innerHTML = "Pressure: " + data.current.pressure_mb + " mb";
    document.getElementById("humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
    document.getElementById("cloud").innerHTML = "Cloud Cover: " + data.current.cloud + "%";
    document.getElementById("vis").innerHTML = "Visibility: " + data.current.vis_km + " km";
    city = data.location.name;
}

checkWeather();

search.onclick = (event) => {
    let name = document.getElementById("location").value;
    if (name != null) {
        event.preventDefault();
        checkWeather(name);
    }
}

pickDate.onclick = (event) => {
    let date = document.getElementById("date").value;
    if (date != null) {
        event.preventDefault();
        checkWeather(city, date);
    }
}