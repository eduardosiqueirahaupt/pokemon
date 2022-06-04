import { useCallback } from "react";
import { useRecoilState } from "recoil"
import { favoritesPokemonsStore } from "../../store/favorites"

const useFavoritesPokemons = () => {
    const [favoritesPokemons, setFavoritesPokemons] = useRecoilState(favoritesPokemonsStore);

    const adicionarFavoritos = useCallback((id) => {
        setFavoritesPokemons(prevState => [...prevState, id])
    }, [])

    const getFavoritesPokemons = useCallback(() => favoritesPokemons, [favoritesPokemons]);

    const removeFavoritesPokemon = useCallback((id) => {
        setFavoritesPokemons(prevState => prevState.filter(x => x !== id))
    }, [])

    return {
        adicionarFavoritos,
        removeFavoritesPokemon,
        getFavoritesPokemons
    }
}

export default useFavoritesPokemons;