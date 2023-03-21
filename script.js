let weather = {
  apiKey: "6ccbe7a0db893a3aba34ef52467fd76b",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText ="Temperature:"+ temp + "°c";
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity:" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/hr";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
  },
  search:function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener('keypress',function(event){
    if(event.key==="Enter"){
        console.log("Anusa");
        weather.search();
    }
});
weather.fetchWeather("Kathmandu");
