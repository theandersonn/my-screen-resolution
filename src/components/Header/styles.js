import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: center;
    height: 32rem;

    h1 {
      font-family: 'Playfair Display';
      font-style: italic;
      font-size: calc(${theme.font.sizes.xxlarge} - 1.4rem);
      color: ${theme.colors.secondary};

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
      `}
  `}
`
