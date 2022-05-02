import * as S from './styled'

const Header = ({ search, handleSearch }) => (
  <S.Wrapper>
    <S.Input
      value={search}
      onChange={handleSearch}
      type="text" name="search" placeholder="Buscar..."
    />
  </S.Wrapper>
)

export default Header