import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '..'

describe('<Header />', () => {
  it('should render correctly and have title', () => {
    const { container } = renderWithTheme(<Header />)

    expect(
      screen.getByRole('heading', { name: /what is my screen resolution\?/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="sc-bdvvaa viVvg"
      >
        <h1>
          What Is My Screen Resolution?
        </h1>
      </header>
    `)
  })
})
