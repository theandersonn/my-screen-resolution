import PropTypes from 'prop-types'

import * as S from './styles'

const Main = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

Main.propTypes = {
  children: PropTypes.elementType.isRequired
}

export default Main
