import { Ipokemon, IPokemonFormated } from "types";

export const adapterCardData = (data: Ipokemon, isFav: boolean): IPokemonFormated => (
  {
    name: data.name,
    id: data.url.slice(34).split('/')[0],
    isFav: isFav
  }
)