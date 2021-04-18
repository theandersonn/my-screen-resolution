import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import ScreenResolution from 'components/ScreenResolution'
import ScreenSize from 'components/ScreenSize'
import Main from 'components/Main'
import Footer from 'components/Footer'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Main>
      <ScreenResolution />
      <ScreenSize />
      <Footer />
    </Main>
  </ThemeProvider>
)

export default App
