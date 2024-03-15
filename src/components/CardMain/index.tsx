import React, { useEffect, useState } from 'react'

import * as S from "./style"
import { WeeklyForecast } from './WeeklyForecast'
import { MainContent } from './MainContent'
// import { getWeather } from '../../services/apiRequest'
import { Header } from './Header'
import axios from 'axios'
// import axios from 'axios'
// axios.get(`https://api.hgbrasil.com/weather?key=688a8890`)

interface ForecastData {
  city: string
  city_name: string | null
  temp: number
  condition_slug: string
  currently: string
  date: string
  description: string
  forecast: [
    {
      date: string
      max: number
      min: number
    }
  ]
  wind_speedy?: string
}

export const CardMain:React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        console.log('oxi')
        const response = await axios.get(`https://api.hgbrasil.com/weather?key=688a8890`)
        console.log('response', response)
        setForecastData(response);
    };
    
    fetchData();
  }, [forecastData]);

  console.log('forecastData', forecastData)

  return (
    <S.CardMain>
      <div id='header'>
        <Header city={forecastData?.city || ''}/>
      </div>
      <div id='mainContent'>
        <MainContent 
          currentTemperature={forecastData?.temp || 0}
          wind={forecastData?.wind_speedy || ''}
          temperatureMinMax={forecastData?.forecast || [{ date: '', max: 0, min: 0 }]}
        />
      </div>
      <div id='footer'>
        <WeeklyForecast forecastWeek={forecastData?.forecast || [{ date: '', max: 0, min: 0 }]}/>
      </div>
    </S.CardMain>
  )
}