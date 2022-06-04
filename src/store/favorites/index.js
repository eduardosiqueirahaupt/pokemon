import { atom } from "recoil";

export const favoritesPokemonsStore = atom({
    key: 'favoritesPokemons',
    default: []
})