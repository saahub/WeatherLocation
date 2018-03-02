import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers';

const WeatherLocation = () => (
    <div>
      <Location city = {'Santiago'}/>
      <WeatherData/>
    </div>
  )

export default WeatherLocation;