import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Verifincando se os links com texto Home, About e Favorite Pokémon estão sendo exibidos na tela', () => {
  it('link texto Home', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByText('Home');
    expect(linkHome).toBeInTheDocument();
  });

  it('link texto About', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
  });

  it('Favorite Pokémon', () => {
    renderWithRouter(<App />);
    const favoritePokemon = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(favoritePokemon).toBeInTheDocument();
  });
});
