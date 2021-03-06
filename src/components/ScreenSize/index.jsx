import { useEffect, useState } from 'react';

import * as S from 'components/ScreenResolution/styles';

const ScreenSize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <S.Wrapper>
      <S.Title>Screen Size</S.Title>
      <S.Description>
        <p>
          Screen Width: <span>{dimensions.width}</span> pixels
        </p>
        <p>
          Screen Height: <span>{dimensions.height}</span> pixels
        </p>
      </S.Description>
    </S.Wrapper>
  );
};

export default ScreenSize;
