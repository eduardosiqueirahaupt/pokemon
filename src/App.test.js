import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const renderComponent = () => (
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
)

describe("App", () => {
  it("Renderizar App", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  })
})