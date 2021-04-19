import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('fonts/playfair-display-v22-latin-700.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Playfair Display';
    font-style: italic;
    font-weight: 700;
    src: local(''),
        url('fonts/playfair-display-v22-latin-700italic.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Chivo';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('fonts/chivo-v12-latin-regular.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
