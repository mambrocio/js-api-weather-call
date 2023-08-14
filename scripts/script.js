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


                let trueAPI = `https:api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=`+ cityLat + `&lon=` + cityLon + `&appid=238eea4f33d97368ff0040161d3e7379`;
                
                return fetch(trueAPI);
            })

            .then(function(response){;
                if (response.status === 200) {
                }
                return response.json();
            })

            .then(function(data){
    
                let dailyArray = data.list;

                let days = dailyArray.filter((element, index) =>{
                    return index % 7 === 0;
                })

                console.log(days)

                for(i = 0; i < days.length; i++){
                    console.log(days[i].main.temp);
                    console.log(days[i].main.humidity);
                    console.log(days[i].wind.speed);
                    console.log(days[i].dt);

                const date = new Date(days[i].dt_txt).toLocaleDateString('en-US');
                const formatedDate = date.split('/').join('-');

                console.log(formatedDate);','
                
                }
            })
            
    
}

weatherSearch.addEventListener('click', cityDisplay);   
weatherSearch.addEventListener('click', fetchWeather)
