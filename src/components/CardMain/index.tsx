import React from 'react'

import * as S from "./style"
import { WeeklyForecast } from './WeeklyForecast'
import { MainContent } from './MainContent'

export const CardMain:React.FC = () => {
  return (
    <S.CardMain>
      <div id='header'>
        <h2>São Paulo</h2>
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