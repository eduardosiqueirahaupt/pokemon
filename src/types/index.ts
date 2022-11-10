export interface Ipokemon {
  name: string;
  url: string
}

export interface IFetchPokemons {
  results: Ipokemon[] | undefined;
}

export interface IPokemonFormated {
  name: string;
  id: string;
  isFav: boolean;
}
