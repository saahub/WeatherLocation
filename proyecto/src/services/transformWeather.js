import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../constant/weathers';

const getWeatherState = weather => {
    return SUN;
  }
  // Cambiamos el nombre por el del archivo
  // Se asignan como constantes para poder usarlas
  const transformWeather = (weather_data) => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(this.weather);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    }
    return data;
  }

export default transformWeather;