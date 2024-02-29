import React from 'react'
import * as S from './style'
import clear_night from '../../../assets/icons/clear_night.svg'
import clear_day from '../../../assets/icons/clear_day.svg'
import fog from '../../../assets/icons/fog.svg'
import cloud from '../../../assets/icons/cloud.svg'
import cloudly_day from '../../../assets/icons/cloudly_day.svg'
import cloudly_night from '../../../assets/icons/cloudly_night.svg'

interface Props {
  forecastWeek: [
    {
      date: string
      max: number
      min: number
    }
  ]
}

export const WeeklyForecast: React.FC<Props> = ({ forecastWeek }) => {

  console.log('forecastWeek: ', forecastWeek)

    return (
      <S.ContainerIcon>
        <div>
          <S.IconContainerForecast>
            <S.Icon src={clear_night} />
          </S.IconContainerForecast>
          <h2>26º</h2>
        </div>
        <div>
          <S.IconContainerForecast>
            <S.Icon src={clear_day} />
          </S.IconContainerForecast>
          <h2>26º</h2>
        </div>
        <div>
          <S.IconContainerForecast>
            <S.Icon src={fog} />
          </S.IconContainerForecast>
          <h2>26º</h2>
        </div>
        <div>
          <S.IconContainerForecast>
            <S.Icon src={cloud} />
          </S.IconContainerForecast>
          <h2>26º</h2>
        </div>
        <div>
          <S.IconContainerForecast>
            <S.Icon src={cloudly_day} />
          </S.IconContainerForecast>
          <h2>26º</h2>
        </div>
        <div>
          <S.IconContainerForecast>
            <S.Icon src={cloudly_night} />
          </S.IconContainerForecast>
          <h2>26º</h2>
        </div>
      </S.ContainerIcon>
    )
  }
