import { useCallback } from "react";
import { useRecoilState } from "recoil"
import { favoritesPokemonsStore } from "../../store/favorites"

const useFavoritesPokemons = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useRecoilState(favoritesPokemonsStore);

  const adicionarFavoritos = useCallback((id) => {
    setFavoritesPokemons(prevState => [...prevState, id])
  }, [setFavoritesPokemons])

  const getFavoritesPokemons = () => favoritesPokemons;

  const removeFavoritesPokemon = useCallback((id) => {
    setFavoritesPokemons(prevState => prevState.filter(x => x !== id))
  }, [setFavoritesPokemons])

  return {
    adicionarFavoritos,
    removeFavoritesPokemon,
    getFavoritesPokemons
  }
}

export default useFavoritesPokemons;