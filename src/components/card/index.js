import * as S from './styled'
import Favorito from '../../images/favorito.png'
import AddFavorito from '../../images/add-fav.png'
import { useState } from 'react';
import { validate } from './validate';
const url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const Card = ({ id, name, refreshCards, isFav, handleFeedback }) => {
  const [_isFav, setIsFav] = useState(isFav);
  const getSrcImg = () => `${url_img}${id}.svg`

  const handleFav = () => {
    const pokemonsFav = JSON.parse(localStorage.getItem("FavPokemons"));
    const validated = validate(pokemonsFav, _isFav);
    if (!validated.isValid) {
      handleFeedback(validated.message)
      return
    }
    if (_isFav) {

      console.log(...pokemonsFav)

      localStorage.setItem("FavPokemons", JSON.stringify([...pokemonsFav.filter(x => x !== id.toString())]))
      handleFeedback("Pokemon Removido dos Favoritos")
    } else {
      localStorage.setItem("FavPokemons", JSON.stringify([...pokemonsFav, id]))
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

export default Card;