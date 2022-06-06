import { IFetchPokemons } from ".";
import { useFetch } from "../../hooks/useFetch";
export interface IFetch {
  data: IFetchPokemons;
}
export const usePokemonsGetData = (): IFetch =>
  useFetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
