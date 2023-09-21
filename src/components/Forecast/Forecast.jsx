import React, { useEffect, useState } from 'react'
import './Forecast.css'

export default function Forecast({ data }) {


  useEffect(() => {
    console.log(data);
  }, [])

  return (<>
    {data.map(item => (
      <div key={item.dt} className='col-md-3 col-sm-5 forecastOneDay'>
        <div className="row">
          <div className='col-md-8 col-sm-6'>
            <p className='forecastDate mt-1'> {item.date} </p>
          </div>
          <div className="col-md-4 col-sm-5  weather-img-container">
            <img src={`icons2/${item.weather[0].icon}.png`} height='80%' width='100%' alt="weather" />
          </div>
        </div>
        <p className='temp'> {Math.floor(item.main.temp_min)}°C - {Math.ceil(item.main.temp_max)}°C </p>
        <p className='descrip'> {item.weather[0].description} </p>

        <div className="forecast-param">
          <div><i className="bi bi bi-wind" ></i>
            <span> {item.wind.speed} m/s</span></div>
          <div><i className="bi bi-droplet-half" ></i>
            <span> {item.main.humidity}% </span></div>
        </div>

      </div>
    ))}
  </>
  )
}
