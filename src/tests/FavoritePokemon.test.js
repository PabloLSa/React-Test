import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente FavoritePokemon.js', () => {
  it('link texto About', () => {
    renderWithRouter(<FavoritePokemon />);
    const noFavoritePokemonFound = screen.getByText(/No favorite pokémon found/i);
    expect(noFavoritePokemonFound).toBeInTheDocument();
  });
  it('Exibindo o Pokémon favorito', () => {
    renderWithRouter(<App />);
    // capturando more details pelo link
    const moreDetailsLink = screen.getByText(/More details/i);
    // clicando no link more details
    userEvent.click(moreDetailsLink);
    // capturando no ckecked favorito
    const checkBoxFavorite = screen.getByRole('checkbox', { name: /favoritado/i });
    // clicando no ckecked e favoritando Podekémon
    userEvent.click(checkBoxFavorite);
    // fazendo acesso ao link pokémon favotito
    const favoriteLinkPokemon = screen.getByRole('link', { name: /favorite/i });
    // clicando no link Favorite Pokémon
    userEvent.click(favoriteLinkPokemon);
    // acessando Favorite Pokémon com a imagem estrela
    const imgFavoritePokemon = screen.getByAltText('Pikachu is marked as favorite');
    expect(imgFavoritePokemon).toBeInTheDocument();
  });
});
