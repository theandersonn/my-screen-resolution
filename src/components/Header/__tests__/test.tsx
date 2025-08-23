import { screen } from '@testing-library/react';
import { render } from 'utils/test-utils';

import Header from '..';

describe('<Header />', () => {
  it('should render correctly and have title', () => {
    const { container } = render(<Header />);

    expect(
      screen.getByRole('heading', { name: /what is my screen resolution\?/i })
    ).toBeInTheDocument();
  });
});
