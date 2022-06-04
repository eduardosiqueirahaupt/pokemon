import * as S from "./styled";
import useFavoritesPokemons from '../../hooks/useFavoritesPokemons';


function Header({ handleSearch }) {
  const { getFavoritesPokemons } = useFavoritesPokemons();

  return (
    <S.Wrapper>
      <S.Input
        onChange={handleSearch}
        type="text"
        name="search"
        placeholder="Buscar..."
        data-testid="input-filter"
      />
      <span style={{color: 'white', marginLeft: '100px'}}>Quantidade de pokemons favoritos: {getFavoritesPokemons().length}</span>
    </S.Wrapper>
  );  
}

export default Header;
