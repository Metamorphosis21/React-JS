import "./Styles_20.css";
import Search from "./Search-Component/Search";
import { useEffect, useState } from "react";

function WeatherApp() {
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [weather, setWeather] = useState({});

  async function fetchWeatherData(param) {
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=ede9f9d39a3ff209ed68a6ed025aa1a6`
      );
      const data = await response.json();
      console.log(data);
      if ((data)) {
        setWeather(data);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData('cuttack')
  }, [])

  async function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate(){
    const date = new Date();
    return date.toLocaleDateString('en-us',{
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="WeatherApp">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {
        loader ? <div>Loading...</div> : 
        <div className="weather-details">
            <div className="city-country">
                {
                    <h2>
                        {weather?.name} , <span>{weather?.sys?.country}</span>
                    </h2>
                }
            </div>
            <div className="time">
              {
                getCurrentDate()
              }
            </div>
            <div className="get coordinates">
              {
                <p><i>Latitude</i>: {weather?.coord?.lat} - <i>Longitude</i>: {weather?.coord?.lon}</p>
              }
            </div>
            <div className="get wind">
              {
                <p><i>Degree</i>: {weather?.wind?.deg} - <i>Gust</i>: {weather?.wind?.gust} - <i>Speed</i>: {weather?.wind?.speed}</p>
              }
            </div>
            <div className="get description">
              {
                <p><i>Description</i>: {weather && weather.weather && weather.weather[0] ? weather.weather[0].description : ""}</p>
              }
            </div>
            <div className="get tempreture">
              {
                <p><i>Temprature</i>: {weather?.main?.temp} , <i>Max_Temp</i>: {weather?.main?.temp_max} , <i>Min_Temp</i>: {weather?.main?.temp_min}</p>
              }
            </div>
            <div className="get FeelsLike">
              {
                <p><i>Feels Like</i>: {weather?.main?.feels_like} , <i>Humidity</i>: {weather?.main?.humidity} , <i>Pressure</i>: {weather?.main?.pressure}</p>
              }
            </div>
        </div>
      }
    </div>
  );
}

export default WeatherApp;
