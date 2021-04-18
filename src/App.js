import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <h1>ScreenResolution</h1>
  </ThemeProvider>
)

export default App
