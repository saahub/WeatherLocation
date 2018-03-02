import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers';

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10m/s'
}

/*el component es una creacion de react para poder escribir constructores de clases
usa javascript, permite que react lo reconozca*/
class WeatherLocation extends Component {
  constructor() {
    super();
  }
  render = () => {
    return(
    <div className='weatherLocation'>
      <Location city = {'Santiago!!'}/>
      <WeatherData data = {data} />
    </div>
    )
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