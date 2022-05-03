import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Favorites from '..'
import * as service from '../../home/home.service'

const renderComponent = () => (render(<Favorites />))


describe("<Favorites/>", () => {

  beforeAll(() => {
    localStorage.setItem("FavPokemons", JSON.stringify(['1', '2', '3', '4', '5']))
  });

  beforeEach(() => {
    jest.spyOn(service, 'fetchAllById').mockImplementation(jest.fn(() => Promise.resolve(getFavPokemons)));
    cleanup();
  })

  it("Deve renderizar com sucesso favoritos", async () => {
    const { container } = renderComponent();
    await waitFor(() => screen.findByText(/bulbasaur/))
    expect(container).toMatchSnapshot();
  });


  it("Deve remover dos favoritos e não aparecer mais em tela", async () => {
    renderComponent();
    await waitFor(() => screen.findByText(/bulbasaur/));

    const favIconBulbasaur = screen.getByTestId('fav-icon-bulbasaur');
    fireEvent.click(favIconBulbasaur)

    expect(await waitFor(() => screen.findByText(/Pokemon Removido dos Favoritos/))).toBeDefined();
  });
})


const getFavPokemons = [
  { "name": "bulbasaur", "id": "1" },
  { "name": "ivysaur", "id": "2" },
  { "name": "venusaur", "id": "3" }
]