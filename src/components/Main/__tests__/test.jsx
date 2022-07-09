import { render } from 'utils/test-utils'

import Main from '..'

describe('<Main />', () => {
  it('should render correctly', () => {
    const { container } = render(<Main>Children</Main>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="sc-bczRLJ iRpuYl"
      >
        Children
      </main>
    `)
  })
})
