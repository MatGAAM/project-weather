import React from 'react'


import * as S from './style'

interface Props {
  city: string
}


export const Header: React.FC<Props> = ({ city }) => {
    return (
      <S.InfoHeaderContainer>
        <S.CityLocation>
          {city}
        </S.CityLocation>
        <S.ClockTime>
          10:00
        </S.ClockTime>
      </S.InfoHeaderContainer>
    )
}