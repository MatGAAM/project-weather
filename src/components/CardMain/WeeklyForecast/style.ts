import styled from "styled-components";

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vw;

  background-color: ${props => props.theme.nightColor};
  color: ${props => props.theme.nightValueColor};

`;

