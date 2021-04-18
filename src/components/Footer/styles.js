import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: auto;

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
  `}
`
