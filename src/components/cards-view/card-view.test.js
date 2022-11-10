import { cleanup, render, screen } from '@testing-library/react'
import CardsView from '.';

const props = {
  data: [{
    id: 1,
    isFav: true,
    name: 'bulbasaur'
  },
  {
    id: 2,
    isFav: false,
    name: 'charmander'
  }
  ]
}

const renderComponent = () => (
  render(<CardsView {...props} />)
)

describe("<CardsView/>", () => {
  beforeEach(() => {
    cleanup();
  });

  it("Must render list of cards", async () => {
    renderComponent();
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('charmander')).toBeInTheDocument()
  });
})
