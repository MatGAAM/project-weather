import styled from "styled-components";
import imgURL from '../../assets/noite-estrelada.jpg'

export const CardMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.nightGradientColor};
  background-image: url(${imgURL});
  background-size: cover;
  background-repeat: no-repeat;
  
  #header {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;

    margin-top: 4.5vh;
  }
  
  #mainContent {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60%;
  }

  #footer {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin-bottom: 4.5vh;
  }

`