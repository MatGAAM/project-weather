import React from 'react'
import * as S from './style'

export const WeeklyForecast: React.FC = () => {
    return (
      <S.ContainerIcon>
        <div>
          <h2>🌤</h2>
          <h2>26º</h2>
        </div>
        <div>
          <h2>☀️</h2>
          <h2>31º</h2>
        </div>
        <div>
          <h2>⛅️</h2>
          <h2>33º</h2>
        </div>
        <div>
          <h2>⛈</h2>
          <h2>35º</h2>
        </div>
        <div>
          <h2>🌦</h2>
          <h2>25º</h2>
        </div>
        <div>
          <h2>⛅️</h2>
          <h2>22º</h2>
        </div>
        <div>
          <h2>🌦</h2>
          <h2>27º</h2>
        </div>
      </S.ContainerIcon>
    )
  }
