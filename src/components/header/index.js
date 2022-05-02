import * as S from './styled'
import Logo from '../../images/pokemon-logo.png'
import { Link } from 'react-router-dom';

const Header = () => (
  <S.Wrapper>
    <S.LogoImg src={Logo} alt='pokemon-logo' />
    <S.TabWrapper>
      <Link to='/'>
        <S.Tab>Inicio</S.Tab>
      </Link>
      <Link to='/favorites'>
        <S.Tab>Favoritos</S.Tab>
      </Link>
    </S.TabWrapper>
  </S.Wrapper>
)

export default Header;