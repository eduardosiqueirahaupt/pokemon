import { fireEvent, render, screen } from '@testing-library/react'
import Home from '..'

const renderComponent = () => (
    render(
        <Home />
    )
)

describe("<Home/>", () => {
    it("Deve clicar no botão e trazer pokemons", () => {
        const { getByText } = renderComponent()
        const button = screen.getByText(/Buscar pokemon/);
        fireEvent.click(button);

        expect(screen.getByText(/Retornou pokemon com sucesso/)).toBeDefined();
    })
})