import * as S from './styles'

const ScreenResolution = () => {
  return (
    <S.Wrapper>
      <h2>Screen Resolution is</h2>
      <p>Screen Width: {window.outerWidth} pixels</p>
      <p>Screen Height: {window.outerHeight} pixels</p>
    </S.Wrapper>
  )
}

export default ScreenResolution
