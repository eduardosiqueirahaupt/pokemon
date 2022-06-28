import { useState } from 'react';
import * as S from './styled'
import Favorito from '../../images/favorito.png'
import AddFavorito from '../../images/add-fav.png'
import { useSetRecoilState } from 'recoil';
import { favoritesPokemonsStore } from '../../store/favorites';
import useAlert from '../../hooks/useAlert';

const url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";


const Card = ({ id, name, isFav }) => {
  const { showAlert } = useAlert()
  const setRecoilState = useSetRecoilState(favoritesPokemonsStore)
  const [_isFav, setIsFav] = useState(isFav);
  const getSrcImg = () => `${url_img}${id}.svg`

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
        <img alt='poketeste' width='90%' height='100%' src={getSrcImg()} />
      </S.ImgWrapper>
      <S.FavImg data-testid={`fav-icon-${name}`} onClick={handleFav} alt='fav-icon' src={_isFav ? Favorito : AddFavorito} />
    </S.Wrapper>
  )
}

export default Card;