import React, { useEffect, useState } from 'react'

import * as S from "./style"
import { WeeklyForecast } from './WeeklyForecast'
import { MainContent } from './MainContent'
import { getWeather } from '../../services/apiRequest'
import { Header } from './Header'
// import axios from 'axios'
// axios.get(`https://api.hgbrasil.com/weather?key=688a8890`)

interface ForecastData {
  city: string
  city_name: string
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
  wind_speedy: string
}

export const CardMain:React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData>()
  // let teste = {}
  useEffect(() => {
    try {
      const response = getWeather()
      console.log('response', response)
      // teste = response.results
      setForecastData(response.results)
      // console.log('teste', teste)
    } catch (err) {
      console.error(err)
    }
    // console.log('response', response)
  },[])

  console.log('forecastData', forecastData)

  return (
    <S.CardMain>
      <div id='header'>
        <Header />
      </div>
      <div id='mainContent'>
        <MainContent />
      </div>
      <div id='footer'>
        <WeeklyForecast />
      </div>
    </S.CardMain>
  )
}