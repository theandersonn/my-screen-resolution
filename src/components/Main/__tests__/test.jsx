import { renderWithTheme } from 'utils/tests/helpers'

import Main from '..'

describe('<Main />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Main>Children</Main>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="sc-bdvvaa lkvuAv"
      >
        Children
      </main>
    `)
  })
})
