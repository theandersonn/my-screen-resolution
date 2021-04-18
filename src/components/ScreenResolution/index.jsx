import * as S from './styles'

const ScreenResolution = () => {
  return (
    <S.Wrapper>
      <S.Title>Screen Resolution</S.Title>
      <S.Description>
        Screen Width: <span>{window.outerWidth}</span> pixels
      </S.Description>
      <S.Description>
        Screen Height: <span>{window.outerHeight}</span> pixels
      </S.Description>
    </S.Wrapper>
  )
}

export default ScreenResolution
