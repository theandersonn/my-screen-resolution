import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    margin-top: auto;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};

    > svg {
      height: 20px;
      width: 20px;
      vertical-align: middle;
      color: red;
    }

    > a {
      text-decoration: none;
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.secondary};
      }
    }
  `}
`
