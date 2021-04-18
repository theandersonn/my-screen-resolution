import { useEffect, useState } from 'react'

import * as S from './styles'

const ScreenSize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <S.Wrapper>
      <h2>Screen Size is</h2>
      <p>Screen Width: {dimensions.width} pixels</p>
      <p>Screen Height: {dimensions.height} pixels</p>
    </S.Wrapper>
  )
}

export default ScreenSize
