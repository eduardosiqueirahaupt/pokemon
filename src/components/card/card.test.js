import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Card from '.'
import * as useAlert from 'hooks/useAlert';
import { useAlertMock } from 'mocks/test';

const propsCard = {
  id: 1,
  isFav: true,
  name: 'bulbasaur'
}

const renderComponent = (_propsCard = propsCard) => (
  render(<Card {..._propsCard} />, { wrapper: RecoilRoot })
)

describe("<Card/>", () => {
  beforeEach(() => {
    jest.spyOn(useAlert, 'default').mockImplementation(jest.fn(() => useAlertMock))
    cleanup();
  });

  it("Must render card and show name", async () => {
    renderComponent();

    screen.getByText(/bulbasaur/);

    expect(screen.queryByText('bulbasaur')).toBeValid()
  });

  it("Must remove card to favorites", async () => {
    renderComponent();

    const icnButton = screen.getByTestId('fav-icon-card');

    fireEvent.click(icnButton);

    expect(useAlertMock.showAlert).toHaveBeenCalledWith("Pokemon Removido dos Favoritos")
  });

  it("Must add card to favorites", async () => {
    renderComponent({ ...propsCard, isFav: false });

    const icnButton = screen.getByTestId('fav-icon-card');

    fireEvent.click(icnButton);

    expect(useAlertMock.showAlert).toHaveBeenCalledWith("Pokemon Adicionado aos Favoritos")
  });
})
