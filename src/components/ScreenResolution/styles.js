import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    border-radius .5rem;

    ${media.greaterThan('medium')`
      background-color: ${theme.colors.grayDark};
    `}

    p + p {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    p {
      font-size: ${theme.font.sizes.large};
    }

    span {
      color: ${theme.colors.secondary};
    }
  `}
`
