import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/test-utils';
import HomePage from './page';

describe('Home Page', () => {
  it('renders heading', () => {
    renderWithTheme(<HomePage />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'My Screen Resolution',
    );
  });
});
