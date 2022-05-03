import axios from "axios";
const initialUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
const byIdPokemon = 'https://pokeapi.co/api/v2/pokemon/'
export const allPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
export const fetchData = (url = initialUrl) => (axios.get(url).then(x => x.data))
export const fetchAllById = (ids) => {
    return axios.all(ids.map((id) => axios.get(byIdPokemon + id).then(x => x.data)))
}