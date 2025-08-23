import { screen } from '@testing-library/react';
import { render } from 'utils/test-utils';

import Footer from '..';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);

    expect(screen.getByRole('link', { name: /theandersonn/i })).toHaveAttribute(
      'href',
      'https://github.com/theandersonn'
    );
  });
});
