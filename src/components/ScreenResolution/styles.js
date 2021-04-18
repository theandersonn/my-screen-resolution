import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    background-color: ${theme.colors.grayDark};

    p + p {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};

    span {
      color: ${theme.colors.secondary};
    }
  `}
`
