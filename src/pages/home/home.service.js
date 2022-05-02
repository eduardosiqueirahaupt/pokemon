import axios from "axios";

export const fetchData = () => (
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20').then(x => x.data)
)