import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero/Hero";

describe('Hero', () => {

  it('should have a heading', () => {
    render(<Hero/>) // Arrange
    const myEl = screen.getByRole('heading', {
      name: /Empowering Trades/i
    }) // act
    expect(myEl).toBeInTheDocument() // assertion
  })

  it('should have right heading text', () => {
    render(<Hero/>) // Arrange
    const myEl = screen.getByText(/Empowering Trades with Our Capital/i) // act
    expect(myEl).toBeInTheDocument() // assertion
  })

})