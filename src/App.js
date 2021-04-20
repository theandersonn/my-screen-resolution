import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Main from 'components/Main'
import Header from 'components/Header'
import ScreenWrapper from 'components/ScreenWrapper'
import Footer from 'components/Footer'
import GithubCorner from 'react-github-corner'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Main>
      <Header />
      <ScreenWrapper />
      <Footer />
      <GithubCorner
        href="https://github.com/theandersonn"
        bannerColor="#2e313a"
        octoColor="#c0ccd4"
      />
    </Main>
  </ThemeProvider>
)

export default App
