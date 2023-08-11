let bgMusic = document.getElementById("bg");
bgMusic.volume = 0.22;

let weatherSearch = document.getElementById('weatherSearch');

// let city = document.getElementById('city').value;
// const inputEnter = document.getElementById('weatherSearch');
// inputEnter.addEventListener("keyPress", function(event) {

//     if(event.key === "Enter"){
//         event.preventDefault();
//         weatherSearch.addEventListener('click', cityDisplay);
//     }
// });

function cityDisplay() {
    let city = document.getElementById('city').value;
    let displaySearch = document.getElementById('cityDisplay').innerHTML = city;
    console.log(displaySearch);

    return false;
}
cityDisplay();

function fetchWeather(){
    let city = document.getElementById('city').value;



    let locName = `http://api.openweathermap.org/geo/1.0/direct?q=` + city + `&appid=238eea4f33d97368ff0040161d3e7379`;

    console.log(locName);

        fetch(locName)
            .then(function (response){
                return response.json();
            })
            
            .then(function (data){
                console.log(data);
                let cityLat = data[0].lat;
                let cityLon = data[0].lon;
    
                console.log(cityLat);
                console.log(cityLon);
            })
        fetc
}

weatherSearch.addEventListener('click', cityDisplay);   
weatherSearch.addEventListener('click', fetchWeather)
