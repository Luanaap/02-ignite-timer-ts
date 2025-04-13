import { ThemeProvider } from 'styled-components' 
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CyclesContext'


export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContextProvider>
        <Router/>
      </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
