import { memo, useState } from 'react';
import useAlert from 'hooks/useAlert';
import Favorite from 'images/favorito.png'
import AddFavorite from 'images/add-fav.png'
import { useSetRecoilState } from 'recoil';
import { favoritesPokemonsStore } from 'store/favorites';
import { base_url_img } from './utils';
import * as S from './styled'

const Card = ({ id, name, isFav }) => {
  const { showAlert } = useAlert()
  const setRecoilState = useSetRecoilState(favoritesPokemonsStore)
  const [_isFav, setIsFav] = useState(isFav);

  const srcImgPokemon = `${base_url_img}${id}.svg`
  const srcImgFavIcon = _isFav ? Favorite : AddFavorite

  const handleFav = () => {
    if (_isFav) {
      setRecoilState(prevState => prevState.filter(x => x !== id))
      showAlert("Pokemon Removido dos Favoritos")
    } else {
      setRecoilState(prevState => [...prevState, id])
      showAlert("Pokemon Adicionado aos Favoritos")
    }
    setIsFav(prev => !prev);
  }

  return (
    <S.Wrapper>
      <S.Title>{name}</S.Title>
      <S.ImgWrapper>
        <img alt='pokeImg' width='90%' height='100%' src={srcImgPokemon} />
      </S.ImgWrapper>
      <S.FavImg
        alt='fav-icon'
        data-testid='fav-icon-card'
        onClick={handleFav}
        src={srcImgFavIcon} />
    </S.Wrapper>
  )
}

export default memo(Card);