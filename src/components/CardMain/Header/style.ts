import styled from "styled-components";

export const centerlizedDiv =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoHeaderContainer = styled(centerlizedDiv)`
  flex-direction: column;
  gap: 0.7rem;
  width: 60vw;
  padding: 1.3rem;
  color: ${props => props.theme.nightValueColor};
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
`

export const CityLocation = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
`

export const ClockTime = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`