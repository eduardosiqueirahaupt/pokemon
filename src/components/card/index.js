import * as S from './styled'
import Favorito from '../../images/favorito.png'
import AddFavorito from '../../images/add-fav.png'
import { memo, useState } from 'react';
import useFavoritesPokemons from '../../hooks/useFavoritesPokemons';

const url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const Card = ({ id, name, refreshCards, isFav, handleFeedback }) => {
  const [_isFav, setIsFav] = useState(isFav);
  const getSrcImg = () => `${url_img}${id}.svg`

  const { removeFavoritesPokemon, adicionarFavoritos } = useFavoritesPokemons();

  const handleFav = () => {
    if (_isFav) {
      removeFavoritesPokemon(id);
      handleFeedback("Pokemon Removido dos Favoritos")
    } else {
      adicionarFavoritos(id);
      handleFeedback("Pokemon Adicionado aos Favoritos")
    }
    if (refreshCards) {
      refreshCards();
    } else {
      setIsFav(prev => !prev);
    }
  }

  return (
    <S.Wrapper>
      <S.Title>{name}</S.Title>
      <S.ImgWrapper>
        <img alt='poketeste' width='90%' height='100%' src={getSrcImg()} />
      </S.ImgWrapper>
      <S.FavImg data-testid={`fav-icon-${name}`} onClick={handleFav} alt='fav-icon' src={_isFav ? Favorito : AddFavorito} />
    </S.Wrapper>
  )
}

export default memo(Card);