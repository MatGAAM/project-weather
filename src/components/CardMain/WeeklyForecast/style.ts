import styled from "styled-components";

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  color: ${props => props.theme.nightValueColor};
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
`;


export const IconContainerForecast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`
