import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Home from '..'
import * as service from '../../../service/pokeapi.service'

const renderComponent = (isFavorites) => (
  render(
    <Home isFavorites={isFavorites} />
  )
)

describe("<Home/>", () => {
  beforeEach(() => {
    jest.spyOn(service, 'fetchData')
      .mockImplementation(jest.fn(() => Promise.resolve(getPokemonsMock)));

    localStorage.setItem("FavPokemons", JSON.stringify([]))

    cleanup();
  })

  it("Deve renderizar Pokemons e gerar snapshot", async () => {
    const { container } = renderComponent();

    await screen.findByText(/bulbasaur/);

    expect(screen.queryByText('bulbasaur')).toBeValid()
    expect(container).toMatchSnapshot();
  });

  it("Deve Favoritar Pokemon", async () => {
    renderComponent();

    await screen.findByText(/bulbasaur/);

    const btnFav = screen.getByTestId('fav-icon-bulbasaur')

    fireEvent.click(btnFav);

    expect(screen.getByText(/Pokemon Adicionado aos Favoritos/)).toBeDefined();
    expect(JSON.parse(localStorage.getItem('FavPokemons')).length).toBe(1)
  });

  it("Deve remover Pokemon dos Favoritos", async () => {
    localStorage.setItem("FavPokemons", JSON.stringify(['1']))

    renderComponent();

    await screen.findByText(/bulbasaur/);

    const btnFav = screen.getByTestId('fav-icon-bulbasaur')
    fireEvent.click(btnFav);

    expect(await screen.findByText(/Pokemon Removido dos Favoritos/)).toBeDefined();
    expect(JSON.parse(localStorage.getItem('FavPokemons')).length).toBe(0)
  });

  it("Deve Validar exceção ao tentar favoritar sexto pokemon", async () => {
    localStorage.setItem("FavPokemons", JSON.stringify(['1', '2', '3', '4', '5']))

    renderComponent();

    await screen.findByText(/bulbasaur/);

    const btnFav = screen.getByTestId('fav-icon-pidgeotto')
    fireEvent.click(btnFav);


    expect(await screen.findByText(/Somente é permitido favoritar no máximo 5 Pokémon/)).toBeDefined();
    expect(JSON.parse(localStorage.getItem('FavPokemons')).length).toBe(5)
  });

  it("Deve filtrar pokemons - nome = 'bulba'", async () => {
    renderComponent();

    const input = screen.getByTestId('input-filter')

    fireEvent.change(input, { target: { value: 'bulba' } })

    expect(await screen.findByText(/bulbasaur/)).toBeDefined();
    expect(screen.queryByText(/charmander/)).toBeNull();
  });
})


describe("<HomeFavorites/>", () => {

  beforeEach(() => {
    localStorage.setItem("FavPokemons", JSON.stringify(['1', '2', '3', '4', '5']))

    jest.spyOn(service, 'fetchData').mockImplementation(jest.fn(() => Promise.resolve(getPokemonsMock)));

    cleanup();
  })

  it("Deve renderizar pokemons Favoritados e gerar snapshot", async () => {
    const { container } = renderComponent(true);

    await screen.findByText(/bulbasaur/);

    expect(screen.queryByText('bulbasaur')).toBeValid()
    expect(container).toMatchSnapshot();
  });


  it("Deve remover dos favoritos e não aparecer mais em tela", async () => {
    renderComponent(true);

    await screen.findByText(/bulbasaur/);

    const btnFav = screen.getByTestId('fav-icon-bulbasaur')

    fireEvent.click(btnFav);

    
    expect(await waitFor(() => screen.findByText(/Pokemon Removido dos Favoritos/))).toBeDefined();
    expect(screen.queryByText(/bulbasaur/)).toBeNull();
  });
})

const getPokemonsMock = {
  "count": 1126,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  "previous": null,
  "results": [
    { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
    { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" },
    { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" },
    { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" },
    { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/" },
    { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/" },
    { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon/7/" },
    { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon/8/" },
    { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon/9/" },
    { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" },
    { "name": "metapod", "url": "https://pokeapi.co/api/v2/pokemon/11/" },
    { "name": "butterfree", "url": "https://pokeapi.co/api/v2/pokemon/12/" },
    { "name": "weedle", "url": "https://pokeapi.co/api/v2/pokemon/13/" },
    { "name": "kakuna", "url": "https://pokeapi.co/api/v2/pokemon/14/" },
    { "name": "beedrill", "url": "https://pokeapi.co/api/v2/pokemon/15/" },
    { "name": "pidgey", "url": "https://pokeapi.co/api/v2/pokemon/16/" },
    { "name": "pidgeotto", "url": "https://pokeapi.co/api/v2/pokemon/17/" },
    { "name": "pidgeot", "url": "https://pokeapi.co/api/v2/pokemon/18/" },
    { "name": "rattata", "url": "https://pokeapi.co/api/v2/pokemon/19/" },
    { "name": "raticate", "url": "https://pokeapi.co/api/v2/pokemon/20/" }
  ]
}
