import * as S from './styles'

const ScreenResolution = () => {
  return (
    <S.Wrapper>
      <S.Title>Screen Resolution</S.Title>
      <S.Description>
        <p>
          Screen Width: <span>{window.outerWidth}</span> pixels
        </p>
        <p>
          Screen Height: <span>{window.outerHeight}</span> pixels
        </p>
      </S.Description>
    </S.Wrapper>
  )
}

export default ScreenResolution
