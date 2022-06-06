import * as S from './styled'
import useFavoritesPokemons from '../../hooks/useFavoritesPokemons';

export default function TabFav() {
    const { getFavoritesPokemons } = useFavoritesPokemons();

    return (
        <S.Tab>{`Favoritos (${getFavoritesPokemons().length})`} </S.Tab>
    )
}