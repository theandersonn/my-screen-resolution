import { TiHeart as HeartIcon } from 'react-icons/ti';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      Made with <HeartIcon /> by {` `}
      <a
        href="https://github.com/theandersonn"
        target="_blank"
        rel="noreferrer"
      >
        theandersonn
      </a>
    </S.Wrapper>
  );
};

export default Footer;
