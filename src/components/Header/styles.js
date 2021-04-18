import styled, { css } from 'styled-components'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
  `}
`
