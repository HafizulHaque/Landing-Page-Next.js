import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe('Home', () => {

  it('should have HomePage! text', () => {
    render(<Home/>) // Arrange
    const myEl = screen.getByText(/Welcome!/i) // act
    expect(myEl).toBeInTheDocument() // assertion
  })

  it('should have a heading', () => {
    render(<Home/>) // Arrange
    const myEl = screen.getByRole('heading', {
      name: /HomePage/i
    }) // act
    expect(myEl).toBeInTheDocument() // assertion
  })

})