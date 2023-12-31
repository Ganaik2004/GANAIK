const apikey = "6e56c2b38ed8bd7e0accc2e3b97c763d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkweather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status==404){
document.querySelector(".error").style.display="block";
document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
  console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round( data.main.temp)+'°C';
        document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        document.querySelector(".visibility").innerHTML=(data.visibility)/1000+"km";
        document.querySelector(".hot").innerHTML=Math.round(data.main.feels_like)+"°C";
        document.querySelector(".gauge").innerHTML=data.main.pressure+"hPa";
        if(data.weather[0].main=="Clouds"){
          weatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display="none";
    }
   
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
    searchbox.value=""
})

