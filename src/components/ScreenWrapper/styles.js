import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 76rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    grid-gap: ${theme.spacings.medium};
  `}
`;
