import React from 'react'
import * as S from './style'


// vai precisar ter o icone de tempo q vai variar entre manhã, tarde e noite, e clima, manhã, tarde e noite
// temperatura 
// velocidade do vento
// minima e máxima

export const MainContent: React.FC = () => {
    return (
      <S.mainContainer>
        {/* componente icone */}
        <div className='icon'> 
          <h2>🌙</h2>
        </div>
        <div className='infoValue'>
          <span className='value'>37</span>
          <div className='celcius'>
            <span>º</span>
          </div>
        </div>
        {/* infos adicionais */}
        <S.infosForecast>
          <S.infoWind>
            <span>💨</span>
            <span>5 km/h</span>
          </S.infoWind>
          <S.minMaxTemperature>
            <div>min</div>
            <div>max</div>
          </S.minMaxTemperature>
        </S.infosForecast>
      </S.mainContainer>
    )
}