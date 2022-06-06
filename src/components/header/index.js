import * as S from './styled'
import Logo from '../../images/pokemon-logo.png'
import { Link } from 'react-router-dom';
import TabFav from './favoritosTab';

const Header = () => {
  return (
    <S.Wrapper>
      <S.LogoImg src={Logo} alt='pokemon-logo' />
      <S.TabWrapper>
        <Link to='/'>
          <S.Tab>Inicio</S.Tab>
        </Link>
        <Link to='/favorites'>
         <TabFav />
        </Link>
      </S.TabWrapper>
    </S.Wrapper>
  )
}

export default Header;