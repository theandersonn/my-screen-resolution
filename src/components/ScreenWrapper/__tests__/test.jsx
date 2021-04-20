import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ScreenWrapper from '..'

describe('<ScreenWrapper />', () => {
  it('should render correctly and have two items', () => {
    renderWithTheme(<ScreenWrapper />)

    expect(screen.getAllByRole('article')).toHaveLength(2)
  })
})
