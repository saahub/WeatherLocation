import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherData = () => {
const { temperature, weatherState, humidity, wind } = data;

return (
    <div className = 'weatherDataCont'>
      <WeatherTemperature temperature = {temperature} weatherState = {weatherState}/>
      <WeatherExtraInfo humidity = {humidity} wind = {wind}/>
    </div>
    )
  }

/*shape valida objetos*/
WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
}

export default WeatherData;