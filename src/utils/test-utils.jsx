import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const customRender = (children) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export * from '@testing-library/react'
export { customRender as render }
