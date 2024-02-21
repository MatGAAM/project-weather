import styled from "styled-components";


export const centeredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const mainContainer = styled(centeredDiv)`
  flex-direction: column;
  justify-content: space-around;

  width: 60vw;
  height: 100%;

  .infoValue {
    display: flex;
    font-size: 100px;
    font-weight: 600;
    color: ${props => props.theme.nightValueColor};
  }
  .celcius {
    font-size: 50px;
    color: ${props => props.theme.nightValueColor};
  }

`
export const infosForecast = styled(centeredDiv)`
  justify-content: space-around;
  width: 100%;
  color: ${props => props.theme.nightValueColor};
`
export const infoWind = styled(centeredDiv)`
  color: ${props => props.theme.nightValueColor};
`
export const minMaxTemperature = styled(centeredDiv)`
  color: ${props => props.theme.nightValueColor};
`
export const IconContainerForecast = styled(centeredDiv)`

  width: 14rem;
  height: 14rem;

  object-fit: contain;
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`

export const Wind = styled.div`
  color: ${props => props.theme.afternoonValueColor};
`