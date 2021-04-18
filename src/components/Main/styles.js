import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.spacings.xxsmall};

    height: 100vh;
    background-color: ${theme.colors.primary};
  `}
`
