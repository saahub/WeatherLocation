import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers';

const api_key = "631deffc7b3dc563f3a19aea3aa586d2";
const location = 'Santiago, scl';
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

const data1 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10m/s'
}

const data2 = {
  temperature: 10,
  weatherState: SNOW,
  humidity: 5,
  wind: '100m/s'
}

/*el component es una creacion de react para poder escribir constructores de clases
usa javascript, permite que react lo reconozca*/
class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Santiago',
      data: data1
    }
  }

  getWeatherState = weather => {
    return SUN;
  }

  getData = (weather_data) => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    }
    return data;
  }

  handleUpdateClick = () => {
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = this.getData(weather_data);
      this.setState({data})
      console.log(weather_data);
    })


    console.log('actualizado');
  }
  render = () => {
    const {city, data} = this.state;
    return(
    <div className='weatherLocation'>
      <Location city = {city}/>
      <WeatherData data = {data} />
      <button onClick = {this.handleUpdateClick} > Actualizar </button>
    </div>
    );
  }
}

/*const WeatherLocation = () => (
    <div className='weatherLocation'>
      <Location city = {'Santiago!!'}/>
      <WeatherData data = {data} />
    </div>
  )
*/

export default WeatherLocation;