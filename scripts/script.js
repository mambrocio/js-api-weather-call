let bgMusic = document.getElementById("bg");
bgMusic.volume = 0.22;

let weatherSearch = document.getElementById('weatherSearch');
let weatherBox = document.getElementById('weatherBox');

// let city = document.getElementById('city').value;
// const inputEnter = document.getElementById('weatherSearch');
// inputEnter.addEventListener("keyPress", function(event) {

//     if(event.key === "Enter"){
//         event.preventDefault();
//         weatherSearch.addEventListener('click', cityDisplay);
//     }
// });


function fetchWeather(event){
 

    let city = document.getElementById('city').value;
    let displaySearch = document.getElementById('cityDisplay').innerHTML = city;

    if (!displaySearch){
        console.log(displaySearch)
    }


    let locName = `http://api.openweathermap.org/geo/1.0/direct?q=` + city + `&appid=238eea4f33d97368ff0040161d3e7379`;


        fetch(locName)
            .then(function (response){
                if (response.status === 400) {
                    let status400 = document.getElementById('cityDisplay').innerHTML = "Enter A City";
                    console.log(status400);
                }
                return response.json();
            })
            
            .then(function (data){
            

                let cityLat = data[0].lat;
                let cityLon = data[0].lon;


                let weatherAPI = `https:api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=`+ cityLat + `&lon=` + cityLon + `&appid=238eea4f33d97368ff0040161d3e7379`;
                
                return fetch(weatherAPI);
            })

            .then(function(response){
                if (response.status === 400) {

                }
                return response.json();
            })

            .then(function(data){
    
                let dailyArray = data.list;

                let days = dailyArray.filter((element, index) => {
                    return index % 7 === 0;
                })


                for(i = 0; i < days.length; i++){

                const date = new Date(days[i].dt_txt).toLocaleDateString('en-US');
                const formatedDate = date.split('/').join('-');

                let degreeRound = Math.round(days[i].main.temp);
                
                let speedRound = Math.round(days[i].wind.speed);

                
                let dailyArray = [formatedDate,  degreeRound, days[i].main.humidity, speedRound];
                console.log(dailyArray);

                let forecast = dailyArray.join('\r\n');
                console.log(forecast);
                
                let createDiv = document.createElement('div');
                let newForecast = document.getElementsByClassName("new-weather").innerHTML = forecast;
                

                createDiv.append(newForecast);
                weatherBox.appendChild(createDiv);

                }
            })
            
    return false;
}
weatherSearch.addEventListener('click', fetchWeather)
