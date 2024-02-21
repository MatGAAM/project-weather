
import React from 'react'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/Theme'
import { CardMain } from '../../components/CardMain'
export const Home: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CardMain />
      <GlobalStyles />
    </ThemeProvider>
  )
}
