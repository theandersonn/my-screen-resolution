'use client';

import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function HomePage() {
  return <Title>My Screen Resolution</Title>;
}
