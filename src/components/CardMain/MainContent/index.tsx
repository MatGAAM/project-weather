import React, { useEffect, useState } from 'react'
import * as S from './style'
import clear_night from '../../../assets/icons/clear_night.svg'
import { FiWind } from "react-icons/fi";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";



// vai precisar ter o icone de tempo q vai variar entre manhã, tarde e noite, e clima, manhã, tarde e noite
// temperatura 
// velocidade do vento
// minima e máxima

interface Props {
  currentTemperature: number
  wind: string
  temperatureMinMax: [
    {
      date: string
      max: number
      min: number
    }
  ]
}

export const MainContent: React.FC<Props> = ({ currentTemperature, wind, temperatureMinMax }) => {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  
  useEffect(() => {
    const readMINMAX = () => {
      try {
        if (temperatureMinMax && temperatureMinMax.length > 0) {
          setMin(temperatureMinMax[0]?.min)
          setMax(temperatureMinMax[0]?.max)
        }
      } catch (err) {
        console.error(err)
      }
    }
    readMINMAX()
  }, [currentTemperature]) 
  

  return (
    <S.mainContainer>
      {/* componente icone */}
      <S.IconContainerForecast>
        <S.Icon src={clear_night} />
      </S.IconContainerForecast>
      <div className='infoValue'>
        <span className='value'>{currentTemperature}</span>
        <div className='celcius'>
          <span>º</span>
        </div>
      </div>
      {/* infos adicionais */}
      <S.infosForecast>
        <S.infoWind>
          <S.Wind>
            <FiWind />
          </S.Wind>
          <span>{wind}</span>
        </S.infoWind>
        <S.minMaxTemperature>
          <div>
            <IoMdArrowDropup />
            <span>{max}</span>
          </div>
          <div>
            <IoMdArrowDropdown />
            <span>{min}</span>
          </div>
        </S.minMaxTemperature>
      </S.infosForecast>
    </S.mainContainer>
  )
}