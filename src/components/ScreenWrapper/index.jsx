import ScreenResolution from 'components/ScreenResolution'
import ScreenSize from 'components/ScreenSize'

import * as S from './styles'

const ScreenWrapper = () => {
  return (
    <S.Wrapper>
      <ScreenResolution />
      <ScreenSize />
    </S.Wrapper>
  )
}

export default ScreenWrapper
