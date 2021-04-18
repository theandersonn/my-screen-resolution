import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Main from 'components/Main'
import Header from 'components/Header'
import ScreenWrapper from 'components/ScreenWrapper'
import Footer from 'components/Footer'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Main>
      <Header />
      <ScreenWrapper />
      <Footer />
    </Main>
  </ThemeProvider>
)

export default App
