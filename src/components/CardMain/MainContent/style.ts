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

  .icon {
    font-size: 80px;
  }

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
  color: ${props => props.theme.anightValueColor};
`
export const infoWind = styled(centeredDiv)`
  color: ${props => props.theme.nightValueColor};
`
export const minMaxTemperature = styled(centeredDiv)`
  color: ${props => props.theme.nightValueColor};
`
