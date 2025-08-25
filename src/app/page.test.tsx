import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import HomePage from './page';

describe('Home Page', () => {
  it('renders heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent(
      'My Screen Resolution',
    );
  });
});
