import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente <PokemonDetails.js', () => {
  it(' testando se contém um texto <name> Details, onde <name> é o nome do Pokémon;', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    const namePokemon = screen.getByText('Pikachu Details');
    expect(namePokemon).toBeInTheDocument();
  });
  it('Não deve existir o link de navegação para os detalhes do Pokémon selecionado', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    expect(bttMoreDetails).not.toBeInTheDocument();
  });
  it('Não deve existir o link de navegação para os detalhes do Pokémon selecionado;', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    const sumaRy = screen.getByRole('heading', {
      name: /summary/i,
    });
    expect(sumaRy).toBeInTheDocument();
  });
  it('', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    const paragrafo = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i,
    );
    expect(paragrafo).toBeInTheDocument();
  });
  it('Na seção de detalhes deverá existir um heading h2 com o texto Game Locations of <name>; onde <name> é o nome do Pokémon exibido', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    const pokemonExibido = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });
    expect(pokemonExibido).toBeInTheDocument();
  });
  it('Todas as localizações do Pokémon devem ser mostradas na seção de detalhes', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    const loc = screen.getByText(/kanto viridian forest/i);
    expect(loc).toBeInTheDocument();
    const loc2 = screen.getByText(/kanto viridian forest/i);
    expect(loc2).toBeInTheDocument(/kanto power plant/i);
  });
  it('Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;, A imagem da localização deve ter um atributo src com a URL da localização', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    const pickachu = 'Pikachu location';
    const url = screen.getAllByAltText(pickachu);
    expect(url[0].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(url[1].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(url[0].alt).toBe(pickachu);
    expect(url[1].alt).toBe('Pikachu location');
  });
  it('Testando se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const bttMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(bttMoreDetails);
    const checkbox = screen.getByText(/pokémon favoritado\?/i);
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    const star = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(star).toBeInTheDocument();
  });
});
