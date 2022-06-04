import { useFetch } from "../../hooks/useFetch";

export const usePokemonsGetData = () => useFetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');

    // axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20').then(x => x.data)