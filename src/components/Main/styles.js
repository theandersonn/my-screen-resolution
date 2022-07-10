import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    padding: ${theme.spacings.xxsmall};

    height: 100vh;
    background-color: ${theme.colors.primary};
  `}
`;
