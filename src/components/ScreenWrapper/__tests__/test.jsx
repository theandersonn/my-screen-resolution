import { render, screen } from 'utils/test-utils'

import ScreenWrapper from '..'

describe('<ScreenWrapper />', () => {
  it('should render correctly and have two items', () => {
    render(<ScreenWrapper />)

    expect(screen.getAllByRole('article')).toHaveLength(2)
  })
})
