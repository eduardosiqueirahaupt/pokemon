import * as S from './styled'
import Favorito from '../../images/favorito.png'
import AddFavorito from '../../images/add-fav.png'
import { useState } from 'react';
const url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const Card = ({ id, name, refreshCards, isFav }) => {
  const [_isFav, setIsFav] = useState(isFav);
  const getSrcImg = () => `${url_img}${id}.svg`

  const handleFav = () => {
    const pokemonsFav = JSON.parse(localStorage.getItem("FavPokemons"));
    if (_isFav) {
      localStorage.setItem("FavPokemons", JSON.stringify([...pokemonsFav.filter(x => x !== id)]))
    } else {
      localStorage.setItem("FavPokemons", JSON.stringify([...pokemonsFav, id]))
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
      <S.FavImg onClick={handleFav} alt='fav-icon' src={_isFav ? Favorito : AddFavorito} />
    </S.Wrapper>
  )
}

export default Card;