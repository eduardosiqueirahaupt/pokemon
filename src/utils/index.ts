interface Ipokemon {
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

export const normalizeDataWithId = (data: Ipokemon, isFav: boolean): IPokemonFormated => (
    {
        name: data.name,
        id: data.url.slice(34).split('/')[0],
        isFav: isFav
    }
)