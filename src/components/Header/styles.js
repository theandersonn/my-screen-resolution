import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 32rem;

    h1 {
      font-family: 'Playfair Display';
      font-style: italic;
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.secondary};
    }
  `}
`
